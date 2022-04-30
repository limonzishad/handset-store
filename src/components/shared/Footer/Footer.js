import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="footer-content">
                <h3>Foolish Developer</h3>
                <p>Foolish Developer ---  source code.</p>
                <ul className="socials">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy; 2022</p>
            </div>
        </footer>
    );
};

export default Footer;