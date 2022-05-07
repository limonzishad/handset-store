import React from "react";
import './Home.css';
import useItem from '../../../hooks/useItem';
import { Card, Carousel } from "react-bootstrap";
import Item from '../Item/Item';
import Footer from "../../shared/Footer/Footer";
import banner1 from '../../../images/banner-1.png';
import banner2 from '../../../images/banner-2.png';
import banner3 from '../../../images/banner-3.png';

const Home = () => {
    const [items] = useItem();
    return (
        <div>
            {/* banner section */}
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

            {/* item section */}
            <div>
                <h2 className="custom-title">SMART PHONES</h2>
                <div className="mt-3 item-container">
                    {
                        items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                    }
                </div>
            </div>
            {/* upcoming phone section */}
            <div>
                <h2 className="custom-title">UPCOMING PHONES</h2>
                <div className="mx-auto mt-3 custom-card-group">
                    <div className="custom-card component-shadow">
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
                    <div className="custom-card component-shadow">
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
                    <div className="custom-card component-shadow">
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
            <div>
                <h2 className="custom-title">PRODUCT STATISTICS</h2>
                <div className="w-75 statistic-container mt-3 component-shadow">
                    <div className="stat">
                        <h3 style={{ fontSize: "35px", fontWeight: 700 }}>350+</h3>
                        <p>MODELS</p>
                    </div>
                    <div className="vl"></div>
                    <div className="stat">
                        <h3 style={{ fontSize: "35px", fontWeight: 700 }}>30+</h3>
                        <p>TOP BRANDS</p>
                    </div>
                    <div className="vl"></div>
                    <div className="stat">
                        <h3 style={{ fontSize: "35px", fontWeight: 700 }}>50+</h3>
                        <p>LATEST DEVICES</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;