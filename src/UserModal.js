import React from 'react';
import { Container, Row, Col,Modal,Button,Form,Badge } from 'react-bootstrap';
class UserModal extends React.Component {
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
          <Modal.Title>{'Logging In'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{marginBottom:10}}>
            <Badge pill border={'dark'} variant={'light'} style={{marginRight:10, color:'#777'}} as={'span'}>Log In</Badge>
            <Badge pill border={'light'} variant={'dark'}  as={'button'}>Sign Up</Badge>
          </Container>
          <Form>
            <Form.Label>UserName</Form.Label>
            <Form.Control></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password'></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}> Help </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default UserModal