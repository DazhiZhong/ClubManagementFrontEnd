import React from 'react';
import { Container, Row, Col,Modal,Button,Form,Badge } from 'react-bootstrap'
import axios from 'axios'

import axiosCookieJarSupport from 'axios-cookiejar-support'
import tough from 'tough-cookie'



class UserModal extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      logIn:true,
      signUp:false,
      user:'',
      pass:'',
      cookieJar: null,
    }
  }
  componentDidMount(){
    axiosCookieJarSupport(axios);

    this.setState({ cookieJar:new tough.CookieJar()});
  }

  uploadContent = () => {
    this.props.closeModal()

    var bodyFormData = new FormData();
    bodyFormData.set('user', this.state.user);
    bodyFormData.set('password', this.state.pass);
    if (this.state.logIn) {
      // this.props.auth(this.state.user, this.state.pass)
    }
    else if (this.state.signUp){
      axios({method:'post',
        url:"http://127.0.0.1:8000/session_register/",
        data:bodyFormData,
        headers: {'Content-Type': 'form-data'},
        withCredentials: true})
      .then((response)=>{console.log(response)})
    }
    this.props.auth(this.state.user, this.state.pass)
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state)
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
            <Form.Control name="user" value={this.state.user} onChange={this.handleInputChange} ></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control name="pass" value={this.state.pass} onChange={this.handleInputChange}  type='password'></Form.Control>
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