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
      cards: []
    };
    this.ChangeText = this.ChangeText.bind(this);

  }

  actionClick = () => {
    // this.setState({cards:[{name:"no"}]})
    console.log('nooooooo!!!')
    
  }
  closeModal=()=>{
    this.setState({showModal:false})
  }
  showModal=()=>{
    this.setState({showModal:true})
  }
  closePostModal=()=>{
    this.setState({showPostModal:false})
    console.log('help')
  }
  showPostModal=()=>{
    this.setState({showPostModal:true})
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

  ChangeText () {
    // this.setState({ButtonText: "help me with a click"});
  }

  render () {
    return (
        <body>
          <StaticNav onClickButton={this.showModal}></StaticNav>
          <CardShow></CardShow>
          <ActionButton onClick={this.showPostModal}></ActionButton>
          <UserModal show={this.state.showModal} closeModal={this.closeModal}></UserModal>
          <PostModal show={this.state.showPostModal} closeModal={this.closePostModal}></PostModal>
          <MyProgressBar progress={10}></MyProgressBar>
        </body>
    );
  }
}

export default App;
