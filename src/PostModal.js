import React from 'react';
import { Container, Row, Col,Modal,Button,Form,Badge } from 'react-bootstrap';
import {axios} from './axios'
class PostModal extends React.Component {
  constructor(props){
    super(props)
    // this.state = { 
    //   showModal:props.showModal
    //  }
    this.state = {
      title:'',
      message:''
    }
    
  }
  componentDidMount(){

  }
  uploadContent = () => {
    var stuff = {
      message: this.state.message,
      title: this.state.title
    }
    var bodyFormData = new FormData();
    bodyFormData.set('message', this.state.message);
    bodyFormData.set('title', this.state.title);
    bodyFormData.set('user', this.props.getUser());
    bodyFormData.set('password', this.props.getPass());
    console.log(stuff)
    axios({method:'post',
      url:"http://127.0.0.1:8000/post_notice/",
      data:bodyFormData,
      headers: {'Content-Type': 'form-data'},
      })
    .then((response)=>{console.log(response)})
    this.props.closeModal()
    setTimeout(()=>{this.props.refresh()}, 500)
    
    
  }
  failPost = () => {
    this.props.authFail();
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
  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Wake Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>NickName</Form.Label>
            <Form.Control name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Your Name/Nickname"></Form.Control>
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" value={this.state.message} onChange={this.handleInputChange} placeholder="I woke up, did you"></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.uploadContent}> Wake Up </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default PostModal