import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Apointment from '../../Sheared/Apointment/Apointment';
import Footer from '../../Sheared/Footer/Footer';
import NavBar from '../../Sheared/NavBar/NavBar';

const Apointments = () => {
    const [apointment, setApointment] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${user.email}`)
            .then(res => res.json())
            .then(data => setApointment(data))    
    }, [isDeleted]);
    

    const handleDelete = id => {
        const handleConfirm = window.confirm('Are you sure to delete');
        if (handleConfirm) {
          fetch(`http://localhost:5000/deleteAppointment/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(result => {
              if (result.deletedCount) {
                  setIsDeleted(true);
                  alert('Deleted Apointment')
              } else {
                setIsDeleted(false);
              }
            });
        }
      };


    return (
        <div>
            <NavBar></NavBar>
            <div
                style={{ background: '#12C1AD' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>My Apointment</h2>
                </Container>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-12'>
                            {
                                apointment.map(data => <Apointment
                                    key={data._id}
                                    apointment={data}
                                    handleDelete={handleDelete}
                                >
                                </Apointment>)
                            }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Apointments;