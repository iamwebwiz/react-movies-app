import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Axios from "axios";

const NewMovieModal = props => {
  let movieTitle = React.createRef();
  let movieGenre = React.createRef();
  let movieSynopsis = React.createRef();
  let movieImage = React.createRef();
  let endpoint = props.baseURL + "/new";

  const handleSubmit = e => {
    e.preventDefault();

    Axios.post(endpoint, {
      title: movieTitle.current.value,
      genre: movieGenre.current.value,
      synopsis: movieSynopsis.current.value,
      image: movieImage.current.files[0]
    })
      .then(res => res.data)
      .then(response => {
        movieTitle.current.value = '';
        movieGenre.current.value = '';
        movieSynopsis.current.value = '';

        console.log(response);
        props.close();
      })
      .catch(err => console.log(err));
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Movie</Modal.Title>
      </Modal.Header>
      <Form
        method="post"
        encType="multipart/form-data"
        action={endpoint}
        onSubmit={handleSubmit}
      >
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              ref={movieTitle}
              id="movieTitle"
              placeholder="Enter title of movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              ref={movieGenre}
              id="movieGenre"
              placeholder="Enter genre of movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Synopsis</Form.Label>
            <Form.Control
              as="textarea"
              name="synopsis"
              ref={movieSynopsis}
              id="movieSynopsis"
              placeholder="Enter synopsis of movie"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              ref={movieImage}
              id="movieImage"
              accept="image/*"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add Movie
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewMovieModal;
