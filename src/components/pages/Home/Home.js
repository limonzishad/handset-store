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
                    <div>
                        <div className="component-shadow custom-border">
                            <div className="cards-container">
                                <img src="https://i0.wp.com/www.mobiledor.com/wp-content/uploads/Apple-iPhone-SE-2020.jpg?w=225&ssl=1" alt="iPhone se 2020" />
                            </div>
                            <div>
                                <h5 className="text-center">Apple iPhone SE 2020</h5>
                                <p className="text-center">COMING SOON</p>
                            </div>
                        </div >
                    </div >
                    <div>
                        <div className="component-shadow custom-border">
                            <div className="cards-container">
                                <img src="https://i0.wp.com/www.mobiledor.com/wp-content/uploads/OnePlus-7T.jpg?w=225&ssl=1" alt="iPhone se 2020" />
                            </div>
                            <div>
                                <h5 className="text-center">OnePlus 7T</h5>
                                <p className="text-center">COMING SOON</p>
                            </div>
                        </div >
                    </div >
                    <div>
                        <div className="component-shadow custom-border">
                            <div className="cards-container">
                                <img src="https://i0.wp.com/www.mobiledor.com/wp-content/uploads/vivo-V23-5G.jpg?w=225&ssl=1" alt="v23 5g" />
                            </div>
                            <div>
                                <h5 className="text-center">Vivo V23 5G</h5>
                                <p className="text-center">COMING SOON</p>
                            </div>
                        </div >
                    </div >
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
                    <div className="stat">
                        <h3 style={{ fontSize: "35px", fontWeight: 700 }}>30+</h3>
                        <p>TOP BRANDS</p>
                    </div>
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