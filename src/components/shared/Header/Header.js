import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    let addItems;
    let allItems;
    let manageItems;
    let myItems;

    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    };

    if (user) {
        addItems = <Nav.Link className="active-color" as={Link} to="/add-items">ADD ITEMS</Nav.Link>;
        allItems = <Nav.Link className="active-color" as={Link} to="/all-items">ALL ITEMS</Nav.Link>;
        manageItems = <Nav.Link className="active-color" as={Link} to="/manage-items">MANAGE ITEMS</Nav.Link>;
        myItems = <Nav.Link className="active-color" as={Link} to="/my-items">MY ITEMS</Nav.Link>;
    }

    return (
        <Navbar className="bg-color" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">HANDSET STORE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="active-color" as={Link} to="/">HOME</Nav.Link>
                        {addItems}
                        {allItems}
                        {manageItems}
                        {myItems}
                        <Nav.Link className="active-color" as={Link} to="/blogs">BLOGS</Nav.Link>
                        <Nav.Link className="active-color" as={Link} to="/about">ABOUT</Nav.Link>
                        {
                            user ?
                                <Nav.Link className="active-color" onClick={handleLogout}>LOGOUT</Nav.Link>
                                :
                                <Nav.Link className="active-color" as={Link} to="/login">LOGIN/REGISTER</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;