// import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='mt-2'>
                    <spen>Journalism Without Fear or Favour</spen>
                </p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="d-flex">
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    Match Highlights: Germany vs Spain — as it happened !  Match Highlights: Germany vs Spain as...Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>





            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link to="#features">
                                <Link to="/" className='text-decoration-none'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                               user && <Nav.Link href="#deets">
                                <spen>{user.name}</spen>
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav.Link>
                            }
                            <Nav.Link eventKey={2} href="#memes">
                               { user?
                                <Button variant="dark">Log Outt</Button>
                                :
                               <Link to="login"> <Button variant="dark">Login</Button></Link>
                               }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;