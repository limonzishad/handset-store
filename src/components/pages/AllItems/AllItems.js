import React from "react";
import useItem from "../../../hooks/useItem";
import Item from "../Item/Item";
import './AllItems.css';

const AllItems = () => {
    const [items] = useItem();
    return (
        <div>
            <h2 className="custom-title">SMART PHONES</h2>
            <div className="mt-3 item-container">
                {
                    items.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default AllItems;