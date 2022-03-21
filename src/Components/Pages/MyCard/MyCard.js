import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Footer from '../../Sheared/Footer/Footer';
import NavBar from '../../Sheared/NavBar/NavBar';

const MyCard = () => {


    const addOrder = () => {
        alert('Succesfully Order Test');
    }

    return (
        <div>
            <NavBar></NavBar>
            <div
                style={{ background: '#12C1AD' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>My Card</h2>
                </Container>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        helllllllllllllllllllllllllllllllllo
                    </div>
                    <div className='col-md-4'>
                        <div
                            style={{ }}
                            className="border border-dark border-3 rounded-3 p-3"
                        >
                            <h4>Total Cost</h4>
                            <h3> $ 35 </h3>
                            <h4>Discount</h4>
                            <h3> $ 35 </h3>
                            <h4>Cost After Discount</h4>
                            <h3> $ 35 </h3>
                            <Button
                                onClick={()=>addOrder()}
                                style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                className="rounded-pill border-0 px-4 w-100"
                            >
                                Order Test
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCard;