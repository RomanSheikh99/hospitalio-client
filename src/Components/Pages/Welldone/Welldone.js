import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import welldone from '../../../images/welldone.jpg'

const Welldone = () => {
    return (
        <div className='my-5'>
            <div className='d-flex justify-content-center align-items-center my-2'>
                <img style={{maxHeight:'300px'}} src={welldone} alt="" />
            </div>
            <div className='d-flex justify-content-center align-items-center my-2'>
                <Button
                    style={{ background: '#12C1AD', outline: 'none' }}
                    className="rounded-pill border-0 px-4 text-center">
                    <Link
                        style={{ color: '#fff', textDecoration: "none" }}
                        to='/home'>
                        Go Back To Home
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Welldone;