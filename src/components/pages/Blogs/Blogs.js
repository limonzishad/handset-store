import React from "react";
import './Blogs.css';
import { Accordion } from "react-bootstrap";

const Blogs = () => {
    return (
        <div className="blog-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q: Difference between javascript and nodejs.</Accordion.Header>
                    <Accordion.Body>Javascript is a dynamic programming language for building websites. Basically javascript used in client side and javascript program can be run in the browsers. Node js, however is a javascript runtime environment. Node js mostly use in server side. Besides, javascript program can be run outside of the browser with the help of node js.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q: When should you use nodejs and when should you use mongodb?</Accordion.Header>
                    <Accordion.Body>Node js is an interpreter or runtime/ running environment for javaScript. It is built on google chrome's V8 javaScript engine. It's main purpose is to execute your application. Mongo db is a no-SQL database for storing data. Mongo db is used when we need high availability of data with automatic, fast, and instant data recovery.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Q: Differences between sql and no-sql databases.</Accordion.Header>
                    <Accordion.Body>SQL stands form Structured Query Language is a relational database management system. SQL databases have static schema. SQL databases are suited for complex queries. No-SQL are non-relational database system. These databases have dynamic schema. But no suitable for complex queries.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q: What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body>JSON Web Token or JWT, is an open standard used to share security information between client sides and server sides. JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWT claims are used to exchange information.  A claim declare the user who issued the token, how long it is valid for, or what permissions the client has been granted.</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div >
    );
};

export default Blogs;