import React from 'react';
import { Container, Row, Col,Modal,Button,Form,Badge } from 'react-bootstrap';
class UserModal extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      logIn:true,
      signUp:false,
      
    }
  }
  componentDidMount(){

  }

  uploadContent = () => {
    this.props.closeModal()
  }

  switchLogInSignUp =  () => {
    this.setState((p) => {
      return {
        logIn:p.signUp,
        signUp:p.logIn
      }
    })

  } 

  pillVariant = () => {
    if (this.state.logIn) {
      return (
        <>
        <Badge pill variant={'light'} style={{marginRight:10, color:'#777'}} as={'span'}>Log In</Badge>
        <Badge pill  variant={'primary'}  as={'button'} onClick={this.switchLogInSignUp}>Sign Up</Badge>
        </>
      )
    } else {
      return (
        <>
        <Badge pill variant={'primary'}  as={'button'} onClick={this.switchLogInSignUp} >Log In</Badge>
        <Badge pill variant={'light'} style={{marginRight:10, color:'#777'}} as={'span'}  >Sign Up</Badge>
        </>
      )
    }
  }

  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          {this.state.logIn && <Modal.Title>Logging In</Modal.Title>}
          {this.state.signUp && <Modal.Title>Signing Up</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Container style={{marginBottom:10}}>
            {this.pillVariant()}
          </Container>
          <Form>
            <Form.Label>UserName</Form.Label>
            <Form.Control></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password'></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.uploadContent}> {this.state.logIn&& "Log In!"}{this.state.signUp && "Sign Up!"} </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default UserModal