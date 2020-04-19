import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
export function StaticNav(props) {
  return (<Navbar>
    <Navbar.Brand href="#">Wakeroo</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        {props.navText}
      </Navbar.Text>
      <Button variant={'primary'} style={{marginLeft:10}} onClick={props.onClickButton}> {!props.login && "Login"} {props.login && "Logout"} </Button>
    </Navbar.Collapse>
  </Navbar>);
}

