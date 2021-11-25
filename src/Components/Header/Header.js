
import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'
import useAuth from './../../hooks/useAuth';

const Header = () => {
  const {user,handleLogOut}=useAuth();
    return (
        <div className="nav-position">
        <Navbar  bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/home"> <img className="logo"src="https://dj7w0h47bhjwk.cloudfront.net/assets/core/logo-f0321dadbee0b6b8ec6d98159305c76e56590ff97a88d28d4eb2400b3baafe49.svg" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" me-auto fs-5">
        
        <Link to="/home" className="items" >Home</Link>
        <Link to="/about" className="items" >About Us</Link>
        <Link to="/contact" className="items" >Contact Us</Link>
        <Link to="/privacy" className="items" >Privacy Policy</Link>
        <i className="fas fa-search text-secondary  mt-3 ps-5"></i>
        <i className="fas fa-dumbbell text-secondary mt-3 ps-3 pe-2"></i>
        {user?.email && (
          <span className="d-flex align-items-center">
            <span>
              <small>Hi,{user.displayName || <b> Name Not Found</b>}</small>
            </span>
          </span>
        )}
        { user.email ?
         <button onClick={handleLogOut} className="btn bg-danger ms-3 text-white">Log Out</button>
         :  
         <Link to="/login"> <button className="btn bg-white border ms-xxl-5 ps-3" >LOGIN</button> </Link>
         
        }
       {! user.email && <Link to="/signup"><button className="btn bg-warning ms-3">SIGN UP</button></Link>
        }
        </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar> 
          
          </div>
        
    );
};

export default Header;