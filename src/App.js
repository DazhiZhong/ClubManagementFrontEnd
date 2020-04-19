import React from 'react';
import logo from './logo.svg';
import Pipi from './Pipi';
import './App.css';
import MyProgressBar from './progressbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  Button,
  Container,
  Row,
  Col,
  Card  } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './About';
import { Home } from './Home';
import { StaticNav } from './StaticNav'
import CardShow from './CardShow'
import ActionButton from "./ActionButton"
import UserModal from './UserModal'
import PostModal from './PostModal'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ButtonText: "help me wit a click",
      showModal:false,
      showPostModal:false,
      cards: [],
      login: false,
      navText: "Sans",
    };


  }

  actionClick = () => {
    // this.setState({cards:[{name:"no"}]})
    console.log('nooooooo!!!')
    
  }
  closeModal=()=>{
    this.setState({showModal:false})
  }
  showModal=()=>{
    if (this.state.login) {
      /*
      actual server side implemenattion of logging out
      axios.get('logout/')
      sth like that
      */
      this.setState({login:false})
    } else {
    this.setState({showModal:true})
    }
  }
  closePostModal=()=>{
    this.setState({showPostModal:false})
    console.log('help')
  }
  showPostModal=()=>{
    this.setState({showPostModal:true})
  }

  authFail = () => {
    this.closePostModal();
    this.showModal();
  }

  componentDidMount = () => {
    // send to ask if user is verified

    // const axios = require('axios').default;
    // console.log('helpmehemlpmeh')
    // axios.get('http://127.0.0.1:8000/api/notice?format=json').then(
    //   (e) => {
    //     console.log(e)
    //   })

  }


  render () {
    return (
        <body>
          <StaticNav onClickButton={this.showModal} login={this.state.login} navText={this.state.navText}></StaticNav>
          <CardShow></CardShow>
          <ActionButton onClick={this.showPostModal}></ActionButton>
          <UserModal show={this.state.showModal} closeModal={this.closeModal}></UserModal>
          <PostModal show={this.state.showPostModal} closeModal={this.closePostModal} authFail={this.authFail}></PostModal>
          {/* <MyProgressBar progress={10}></MyProgressBar> */}
        </body>
    );
  }
}

export default App;
