import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="footer-content">
                <h3>HANDSET STORE</h3>
                <p>&copy; all copyright reserved to handset-store.com</p>
                <ul className="socials">
                    <li><a href="#"><FontAwesomeIcon icon={faLaptop} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLaptopCode} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLaptop} /></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy; 2022</p>
            </div>
        </footer>
    );
};

export default Footer;