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
      data:props.data,
    }
  }


  render() {
    return (<Container fluid>
      <Row className={"justify-content-xs-center"}>
        {/* <Col xs={1}> </Col> */}
        <Col align="center">
          {this.props.data.length===0 && <ManCard title={"be the first!"} text={"be the first"} id={4}></ManCard>}
          {this.props.data.map((d)=>{return (<ManCard title={d.title} text={d.text} id={d.id}></ManCard>) })}
        </Col>
        {/* <Col xs={1}> </Col> */}
      </Row>
    </Container>);
  }
}

export default CardShow
