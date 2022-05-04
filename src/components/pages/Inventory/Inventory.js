import React from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
    const { id } = useParams();
    return (
        <div>
            <div className="w-50 mx-auto mt-5 component-shadow custom-border">
                <div className="cards-container">
                    {/* <img src={img} alt={name} />
                <h5 className="mt-4">{name}</h5> */}
                </div>
                <p className="item-text">{id}</p>
                {/* <p className="item-text">Price: {price}</p> */}
                <div className="w-50 mx-auto"><button variant="primary" className="bg-danger w-100 mx-auto common-button custom-border" style={{ margin: '0', padding: '0' }}>DELIVERED</button></div>
            </div>
            <div className="w-25 mx-auto mt-5"><Link to="/manage-items"><button variant="primary" className="w-100 mx-auto common-button custom-border" style={{ margin: '0', padding: '0' }}>MANAGE INVENTORY</button></Link></div>
        </div>
    );
}

export default Inventory;