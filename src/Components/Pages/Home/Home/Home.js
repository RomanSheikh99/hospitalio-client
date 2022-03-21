import React from 'react';
import Footer from '../../../Sheared/Footer/Footer';
import NavBar from '../../../Sheared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;