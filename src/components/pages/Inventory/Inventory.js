import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    });

    return (
        <div>
            <div className="w-50 mx-auto mt-5 component-shadow custom-border">
                <div className="cards-container">
                    <img src={item.img} alt={item.name} />
                    <h5 className="mt-4">{item.name}</h5>
                </div>
                <p className="item-text">Supplier: {item.supplier}</p>
                <p className="item-text">Model: {item.name}</p>
                <p className="item-text">Price: {item.price}</p>
                <p className="item-text">Quantity: {item.quantity}</p>
                <p className="item-text">Sold: {item.sold}</p>
                <p className="item-text">Description: {item.description}</p>
                <div className="w-50 mx-auto"><button variant="primary" className="bg-danger w-100 mx-auto common-button custom-border" style={{ margin: '0', padding: '0' }}>DELIVERED</button></div>
            </div>
            <div className="w-25 mx-auto mt-5"><Link to="/manage-items"><button variant="primary" className="w-100 mx-auto common-button custom-border" style={{ margin: '0', padding: '0' }}>MANAGE INVENTORY</button></Link></div>
        </div>
    );
}

export default Inventory;