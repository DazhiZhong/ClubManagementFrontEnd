import React from 'react';
import { Container, Row, Col,Modal,Button,Form,Badge } from 'react-bootstrap';
class PostModal extends React.Component {
  constructor(props){
    super(props)
    // this.state = { 
    //   showModal:props.showModal
    //  }
  }
  componentDidMount(){

  }

  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Wake Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>NickName</Form.Label>
            <Form.Control placeholder="Your Name/Nickname"></Form.Control>
            <Form.Label>Message</Form.Label>
            <Form.Control placeholder="I woke up, did you"></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}> Wake Up </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default PostModal