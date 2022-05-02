import React from "react";
import './Inventory.css';
import Item from '../Item/Item';
import useItem from "../../../hooks/useItem";

const Inventory = () => {
    const [items] = useItem();
    return (
        <div className="reviews-container mt-5 pb-5">
            {
                items.map(items => <Item key={items.id} items={items}></Item>)
            }
        </div>);
}

export default Inventory;