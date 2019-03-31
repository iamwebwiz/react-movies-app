import React from "react"
import { Button, Modal } from 'react-bootstrap'

const NewMovieModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
                Close
            </Button>
            <Button variant="primary" onClick={props.close}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default NewMovieModal
