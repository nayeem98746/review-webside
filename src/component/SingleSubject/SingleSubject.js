import React from 'react';

const SingleSubject = (props) => {
    const {Group,subject, DepertmentHead,img } = props.sub
    return (
        <div className="cart">
           <div>
                <img style={{height:"200px", width:"220"}} src={img} alt="" />
            </div>
            <div>
                <h2>Group:{Group}</h2>
                <h3>Subject:{subject}</h3>
                <h3>Depertment Head:{DepertmentHead}</h3>
            </div>

                        
        </div>
    );
};

export default SingleSubject;