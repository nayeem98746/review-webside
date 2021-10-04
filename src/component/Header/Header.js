import React from 'react';
import "./Header.css"
import img from "../../images/banner.jpg"
import MenuBar from '../MenuBar/MenuBar';


const Header = () => {
    return (
       
        <header className="  bg-color ">
           
            <div className= "row d-flex align-items-center justify-content-center banner-style">
            <div  className=" col-md-6 banner-details">
                <h1>Major General Mahmudul Hasan Adarsha College, Tangail</h1>
                <p>Sad ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ut beatae vitae dicta sunt explicabo</p>
                <button>Get Started</button>
            </div>
            <div className="col-md-6">
               <img height="400px" width="450px" src={img}alt="" />
            </div>
            </div>
        </header>
            
        
    );
};

export default Header;