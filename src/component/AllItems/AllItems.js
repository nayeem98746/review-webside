import React, { useEffect, useState } from 'react';
import SingleItems from '../SingleItems/SingleItems';
import "./Allitems.css"

const AllItems = () => {

   
    const [club, setClub] = useState([])
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setClub(data))
      
    } ,[])
    return (
        <div>
            
            {
                club.map(cb => <SingleItems
                
                key={cb.id}
                cb={cb}
                
                >

                </SingleItems> )
            }
        </div>
    );
};

export default AllItems;