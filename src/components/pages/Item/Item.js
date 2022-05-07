import React from "react";
import { useNavigate } from "react-router-dom";
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, description, img, price, supplier, quantity } = item;
    const navigate = useNavigate();
    const showItemDetails = (id) => {
        navigate(`/inventory/${id}`);
    };

    return (
        <div>
            <div className="component-shadow custom-border">
                <div className="cards-container">
                    <img src={img} alt={name} />
                    <h5 className="mt-4">{supplier} {name}</h5>
                </div>
                <p className="item-text">Description: {description}</p>
                <p className="item-text">Quantity: {quantity}</p>
                <p className="item-text">Price: {price}</p>
                <div className="w-75 mx-auto"><button onClick={() => { showItemDetails(_id) }} variant="primary" className="w-100 mx-auto mb-1 common-button custom-border" style={{ margin: '0', padding: '5px' }}>UPDATE
                </button></div>
            </div >
        </div >
    );
};

export default Item;