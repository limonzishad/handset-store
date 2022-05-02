import React from "react";
import './Item.css';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
    const { id, name, details, img, price } = props.item;
    return (
        <div>
            <div className="component-shadow custom-border">
                <div className="cards-container">
                    <img src={img} alt={name} />
                    <h5 className="mt-4">{name}</h5>
                </div>
                <p className="item-text">{details}</p>
                <p className="item-text">Price: {price}</p>
                <div><Link to="/enroll"><button variant="primary" className="w-100 mx-auto custom-border">UPDATE</button></Link></div>
            </div >
        </div >
    );
}

export default Item;