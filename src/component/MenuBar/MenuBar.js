// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import logo from "../../images/83032059_963125947415816_4773941572108550144_n.jpg"
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const MenuBar = () => {



  // const element = <FontAwesomeIcon icon={faCoffee} />

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">
        <img height="50px" width="50px" src={logo} alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">Services</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link disabled">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled">Contact us</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  );
};

export default MenuBar;