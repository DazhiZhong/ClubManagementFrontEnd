import React from 'react';
import logo from './logo.svg';
import Pipi from './Pipi';
import './App.css';
import MyProgressBar from './progressbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {axios} from "./axios"
import moment from 'moment'
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

// axios.defaults.withCredentials = true

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
      loginUser: "",
      loginPass: "",
      data:[],
    };


  }

  setUserPass = (u,p) => {

  }
  getUser = () => {
    return this.state.loginUser
  }
  getPass = () => {
    return this.state.loginPass
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
  authorization = (u,p) => {
    this.setState({login:true})
    this.setState({
      loginUser: u,
      loginPass: p,})
  }
  logout=()=>{
    this.setState({login:false})
  }
  componentDidMount = () => {
    this.getData()
    // send to ask if user is verified

    // const axios = require('axios').default;
    // console.log('helpmehemlpmeh')
    // axios.get('http://127.0.0.1:8000/api/notice?format=json').then(
    //   (e) => {
    //     console.log(e)
    //   })

  }
  getData = () => {
    console.log(this.state.data.length)
    console.log(this.state.data)
    axios.get('http://127.0.0.1:8000/api/notice?format=json&ordering=time').then((r)=>{
        console.log(r)
        console.log(r.data)
        this.parseData(r.data)
      })
  };

  parseData = (data) => {
    var newstuff = data.map((d,i)=>{
      console.log(d.time)
      console.log(moment(d.time).format('kk:mm:ss'))
      var n = {title:d.title, message:d.message, text:moment(d.time).format('kk:mm:ss'), id:i}
      return n
    })
    this.setState({data:newstuff})
    
  }


  loginUser = () => {

  }

  postNotice = () => {

  }

  render () {
    return (
        <body>
          <StaticNav onClickButton={this.showModal} login={this.state.login} navText={this.state.navText}></StaticNav>
          <CardShow data={this.state.data}></CardShow>
          <ActionButton onClick={this.showPostModal}></ActionButton>
          <UserModal show={this.state.showModal} closeModal={this.closeModal} auth={this.authorization}></UserModal>
          <PostModal refresh={this.getData} show={this.state.showPostModal} closeModal={this.closePostModal} authFail={this.authFail} getUser={this.getUser} getPass={this.getPass}></PostModal>
          {/* <MyProgressBar progress={10}></MyProgressBar> */}
        </body>
    );
  }
}

export default App;
