import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ManCard from './ManCard'
class CardShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
  };
  render() {
    return (<Container fluid>
      <Row className={"justify-content-xs-center"}>
        {/* <Col xs={1}> </Col> */}
        <Col align="center">
          <ManCard title={"myass"} text="9.18"></ManCard>
        </Col>
        {/* <Col xs={1}> </Col> */}
      </Row>
    </Container>);
  }
}

export default CardShow;
