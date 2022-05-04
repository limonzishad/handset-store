import React from "react";
import { useNavigate } from "react-router-dom";
import './Item.css';

const Item = ({ item }) => {
    const { id, name, details, img, price } = item;
    const navigate = useNavigate();
    const showItemDetails = (id) => {
        navigate(`/inventory/${id}`);
    };

    return (
        <div>
            <div className="component-shadow custom-border">
                <div className="cards-container">
                    <img src={img} alt={name} />
                    <h5 className="mt-4">{name}</h5>
                </div>
                <p className="item-text">{details}</p>
                <p className="item-text">Price: {price}</p>
                <div><button onClick={() => { showItemDetails(id) }} variant="primary" className="w-100 mx-auto common-button custom-border" style={{ margin: '0', padding: '5px' }}>UPDATE
                </button></div>
            </div >
        </div >
    );
};

export default Item;