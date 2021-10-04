import React from 'react';
import "./SingleItems.css"

const SingleItems = (props) => {
    const {name, moderator,clubName,img,entryFee} = props.cb
    return (
        <div className= " cart text-center" >
            
            <img className="img-size" src={img} alt="" />
            <h2>College:{name}</h2>
            <h2>Moderator : {moderator}</h2>
            <h3>Club Name : {clubName}</h3>
            <h3>Entry Fee : {entryFee}</h3>
            <button>Registration</button>
            
        </div>
    );
};

export default SingleItems;