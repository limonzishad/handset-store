import React from "react";
import './Home.css';
import { Card } from "react-bootstrap";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* upcoming phone section */}
            <div>
                <h2 className="custom-title">UPCOMING PHONES</h2>
                <div className="mx-auto mt-3 custom-card-group">
                    <div className="custom-card">
                        <div className="mt-2 text-center">
                            <img src="https://i.gadgets360cdn.com/products/large/realme-v25-709x800-1646304410.jpg?downsize=*:180" alt="" />
                        </div>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className="custom-card">
                        <div className="mt-2 text-center">
                            <img src="https://i.gadgets360cdn.com/products/large/realme-v25-709x800-1646304410.jpg?downsize=*:180" alt="" />
                        </div>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className="custom-card">
                        <div className="mt-2 text-center">
                            <img src="https://i.gadgets360cdn.com/products/large/realme-v25-709x800-1646304410.jpg?downsize=*:180" alt="" />
                        </div>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </div>
            {/* statistics section */}
            <h2 className="custom-title">PRODUCT STATISTICS</h2>
            <div className="statistic-container mt-3">
                <div className="stat">
                    <h3 style={{ fontSize: "50px", fontWeight: 700 }}>350+</h3>
                    <p>MODELS</p>
                </div>
                <div className="vl"></div>
                <div className="stat">
                    <h3 style={{ fontSize: "50px", fontWeight: 700 }}>30+</h3>
                    <p>TOP BRANDS</p>
                </div>
                <div className="vl"></div>
                <div className="stat">
                    <h3 style={{ fontSize: "50px", fontWeight: 700 }}>50+</h3>
                    <p>LATEST DEVICES</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;