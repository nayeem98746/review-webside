import React from 'react';
import logo from "../../images/education.png"
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'

import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const element = <FontAwesomeIcon icon={ faCoffee} />

    return (
        <footer className=" footer-container">
            <div className="d-flex p-3">
                <div className="col-md-4 d-flex footer-details   ">
                    <div>
                        <h4>POPULAR</h4>
                        <p>Academic Calander</p>
                        <p>Tuition and Fees</p>
                        <p>Degree  and Certificates</p>
                        <p>FVTC Foundation</p>
                        <p>Scholarships</p>
                        <p>Library</p>
                    </div>
                    <div>
                        <h4>RESOURCES</h4>
                        <p>Student</p>
                        <p>Aulmni</p>
                        <p>Business and Industry</p>
                        <p>International</p>
                        <p>K-12 Partners</p>
                        <p>Faculty and Staff</p>
                    </div>
                    <div>
                        <h4>QUICK LINKS</h4>
                        <p>Contact Us</p>
                        <p>Locations</p>
                        <p>Jobs @ FVTC</p>
                        <p>Graduate Jobs</p>
                        <p>Student Jobs</p>
                    </div>
                </div>
                <div className="col-md-4 middle-style   ">
                    <h3 >MEET YOUR FUTURE</h3>
                    <img  height="25px" width="150px" src={logo} alt="" />
                    <br />
                    <button className="button-style">APPLY NOW</button>
                </div>
                <div className="col-md-4">
                   
                    <h2> Tangail Road:102</h2>
                    <h2>phone:0175263652</h2>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;