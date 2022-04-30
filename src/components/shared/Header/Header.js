import React from "react";
import './Header.css';
import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
import banner1 from '../../../images/banner-1.png';
import banner2 from '../../../images/banner-2.png';
import banner3 from '../../../images/banner-3.png';

const Header = () => {
    return (
        <div>
            <div>
                <Navbar className="bg-color" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">HANDSET STORE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto active-color">
                                <Nav.Link href="#home">HOME</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="w-100 h-25 img-border" src={banner1} alt="banner-1"
                        />
                        <Carousel.Caption className="text-warning fw-bold py-5">
                            <h3 style={{ fontWeight: 700 }}>NEW ARRIVALS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100 h-25 img-border" src={banner2} alt="banner-2"
                        />
                        <Carousel.Caption className="text-warning fw-bold py-5">
                            <h3 style={{ fontWeight: 700 }}>DISCOUNTS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100 h-25 img-border" src={banner3} alt="banner-3"
                        />
                        <Carousel.Caption className="text-warning fw-bold py-5">
                            <h3 style={{ fontWeight: 700 }}>LATEST TECHNOLOGY</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Header;