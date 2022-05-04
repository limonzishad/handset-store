import React from "react";
import './Blogs.css';
import { Accordion } from "react-bootstrap";

const Blogs = () => {
    return (
        <div className="blog-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q: Difference between javascript and nodejs.</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q: When should you use nodejs and when should you use mongodb?</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Q: Differences between sql and no-sql databases.</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q: What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div >
    );
};

export default Blogs;