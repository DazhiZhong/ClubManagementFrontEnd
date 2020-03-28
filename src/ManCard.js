import React from 'react';
import { Image,Row,Col,Card, Button,Badge } from 'react-bootstrap';
import "./ManCard.css"
function ManCard(props) {
  return (<Card border="warning" className={"card"}>
    <Card.Body  style={{padding:0, paddingTop:8}} flex>
      <Row >
        <Col xs={1}><Image src="crown.png" style={{marginLeft:20,marginTop:-2,width:'1.3em',height:'1.3em'}} roundedCircle /> </Col>
        <Col xs={'auto'} style={{marginLeft:20}}> <h5>Name of person</h5></Col>
        {/* <Col xs={2}></Col> */}
        <Col style={{marginRight:20}} align={'right'}>
          
          <h5><Badge pill style={{background:"#EBCC19"}}>
            Info
           </Badge></h5>
        </Col>
      </Row>
    </Card.Body>
  </Card>);
}
export default ManCard  