import React, { Component } from 'react';
import { Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button } from 'reactstrap';

class Home extends Component {
  state = {
    movies: [],
    baseURL: 'https://simplecrudapi.herokuapp.com/api/movies'
  };

  componentDidMount() {
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
    return (
      <div>
        <h1>React Movies App</h1>
        <hr />
        <h3>Available Movies</h3>
      </div>
    );
  }
}

export default Home;
