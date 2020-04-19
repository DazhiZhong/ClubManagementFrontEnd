import React from 'react';
import { Image,Row,Col,Card, Button,Badge } from 'react-bootstrap';
import "./ManCard.scss"
function ManCard(props) {
  
  var ranking;
  if (props.id === 0){
    ranking={card:'first-card', crown:'crown.png'}
  } else if (props.id === 1) {
    ranking={card:'second-card', crown:'silvercrown.png'}
  } else if (props.id === 2) {
    ranking={card:'third-card', crown:'bronzecrown.png'}
  } else {
    ranking={card:'normal-card', crown:'metal.png'}
  }

  return (
  // <Card border="warning" className={"card"}>
  //   <Card.Body  style={{padding:0, paddingTop:8}} flex>
  //     <Row >
  //       <Col xs={1}><Image src="crown.png" style={{marginLeft:20,marginTop:-2,width:'1.3em',height:'1.3em'}} roundedCircle /> </Col>
  //       <Col xs={'auto'} style={{marginLeft:20}}> <h5>{props.title}</h5></Col>
  //       {/* <Col xs={2}></Col> */}
  //       <Col style={{marginRight:20}} align={'right'}>
  //         <h5>
  //           <Badge pill style={{background:"#EBCC19"}}>
  //           {props.text}
  //          </Badge>
  //         </h5>
  //       </Col>
  //     </Row>
  //   </Card.Body>
  // </Card>
  <Card  className={[ranking.card,"dynamic-width","card"]}>
    <Card.Body className={"card-body"} flex>
      <Row >
        <Col xs={1}>
          <Image src={ranking.crown} className={'crown'}  />
        </Col>
        <Col xs={'auto'} className={"card-title"} > 
          <h5>{props.title}</h5>
        </Col>
        <Col className={"card-time"}  align={'right'}>
          <h5>
            <Badge pill className={"time-pill"}>
            {props.text}
           </Badge>
          </h5>
        </Col>
      </Row>
    </Card.Body>
  </Card>
  );
}
export default ManCard  