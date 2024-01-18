import {Container, Nav, Navbar} from 'react-bootstrap';
import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import headerImage from '../../assets/meals.jpg';
import './Header.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
    <Navbar expand="lg" className="header z-10 sticky-top top-0 left-0 p-3 w-100">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-white'>Foodie Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HeaderCartButton showCartOnClick = {props.onShow} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='main-image'>
    <img src={headerImage} alt='A table full of delicious food!'></img>
    </div>
    </header>
    </React.Fragment>
  );
};

export default Header;
