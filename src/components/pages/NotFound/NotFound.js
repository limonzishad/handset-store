import React from "react";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="message component-shadow custom-border">
            <h1 className="mt-2">&#9746; 404 ERROR &#9746;</h1>
            <p>unfortunately, this is a wrong route.</p>
        </div>
    );
};

export default NotFound;