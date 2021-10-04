import React from 'react';
import AllItems from '../AllItems/AllItems';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <AllItems></AllItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;