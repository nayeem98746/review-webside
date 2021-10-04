import React, { useEffect, useState } from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';

const Service = () => {
    const [subject, setSubject] = useState([])
    useEffect(()=>{
        fetch('./subject.json')
        .then(res => res.json())
        .then(data => setSubject(data))

    },[])
    return (
        <div>
            {
                subject.map(sub => <SingleSubject
                key={sub.id}
                sub={sub}
                
                ></SingleSubject> )
            }
        </div>
    );
};

export default Service;