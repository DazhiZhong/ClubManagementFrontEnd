import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ManCard from './ManCard'
import axios from 'axios'
import data from './data'
import * as moment from 'moment';

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[]
    }
  }
  componentDidMount = () => {
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

  render() {
    return (<Container fluid>
      <Row className={"justify-content-xs-center"}>
        {/* <Col xs={1}> </Col> */}
        <Col align="center">
          {this.state.data.length===0 && <ManCard title={"be the first!"} text={"be the first"} id={4}></ManCard>}
          {this.state.data.map((d)=>{return (<ManCard title={d.title} text={d.text} id={d.id}></ManCard>) })}
        </Col>
        {/* <Col xs={1}> </Col> */}
      </Row>
    </Container>);
  }
}

export default CardShow
