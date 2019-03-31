import React, { Component } from "react"
import NewMovieModal from "./partial/NewMovieModal"
import { Button, Card, CardGroup } from "react-bootstrap"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      baseURL: "https://simplecrudapi.herokuapp.com/api/movies",
      show: false
    }
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    this.fetchMovies()
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  fetchMovies() {
    fetch(this.state.baseURL)
      .then(res => res.json())
      .then(movies => {
        this.setState({
          movies: movies
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { movies } = this.state
    const moviesList = movies.map((movie, index) => {
      return (
        <Card key={index}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.synopsis}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Genre: {movie.genre}</small>
          </Card.Footer>
        </Card>
      )
    })

    return (
      <div>
        <h1>React Movies App</h1>
        <hr />
        <div className="row">
          <div className="col-auto">
            <h3>Available Movies</h3>
          </div>
          <div className="col-auto">
            <Button variant="primary" onClick={this.handleShow}>
              Upload Movie
            </Button>
          </div>
        </div>
        <div className="row">
          <CardGroup>{moviesList}</CardGroup>
        </div>
        <NewMovieModal show={this.state.show} onHide={this.handleClose} close={this.handleClose} />
      </div>
    )
  }
}

export default Home
