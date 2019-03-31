import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Home extends Component {
  state = {
    movies: [],
    baseURL: 'https://simplecrudapi.herokuapp.com/api/movies'
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    fetch(this.state.baseURL)
      .then((res) => res.json())
      .then((movies) => {
        this.setState({
          movies: movies
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>React Movies App</h1>
        <hr />
        <h3>Available Movies</h3>

        <div className="row">
          {movies.map((movie) => {
            return (
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{movie.title}</CardTitle>
                  <CardSubtitle>Genre: {movie.genre}</CardSubtitle>
                  <CardText>{movie.synopsis}</CardText>
                  <Button>Watch Movie</Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
