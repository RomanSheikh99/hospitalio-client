import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Sheared/Footer/Footer';
import NavBar from '../../Sheared/NavBar/NavBar';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import GiveReview from '../GiveReview/GiveReview';
import Reviews from '../Reviews/Reviews';

const DoctorProfile = () => {
    const { user } = useAuth();
    const { doctorID } = useParams();
    const [displayDoctor, setDisplayDoctor] = useState([]);
    const [appointment, setAppointment] = useState([]);
    const [review, setReview] = useState([]);
    const [isAddNewReview, setIsAddNewReview] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const updateReview = () => {
        setIsAddNewReview(true)
    }

    useEffect(() => {
        fetch(`https://serene-hamlet-92817.herokuapp.com/doctor/${doctorID}`)
            .then(res => res.json())
            .then(data => setDisplayDoctor(data))
    }, []);

    useEffect(() => {
        fetch(`https://serene-hamlet-92817.herokuapp.com/review/${doctorID}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [isAddNewReview]);


    useEffect(() => {
        fetch(`https://serene-hamlet-92817.herokuapp.com/appointment/${user.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointment]);

    const takeAppointment = (data) => {
        
        const addAppointment = appointment.find(data => data.apointmentId === displayDoctor[0]._id);

        if (addAppointment) {
            alert('Already Take Appointment');
        } else {
            const apointment = {};
            apointment.apointmentId = displayDoctor[0]._id;
            apointment.apointmentDate = data.date;
            apointment.doctorName = displayDoctor[0].name;
            apointment.visitingCost = displayDoctor[0].cost;
            apointment.doctorImg = displayDoctor[0].img;
            apointment.status = 'pending';
            apointment.userId = user.email;
            axios.post('https://serene-hamlet-92817.herokuapp.com/addAppointment', apointment).then(res => {
                if (res.data.insertedId) {
                    reset();
                    alert('Appointment Granted');
                }
            });
        }
    };


    return (
        <>
            <NavBar></NavBar>
            <div className="my-5">
                <Container>
                    <Row>
                        <Col md={4} sm={12}>
                            <img className="img-fluid img-thumbnail"
                                src={displayDoctor[0]?.img} alt="" />
                        </Col>
                        <Col md={4} sm={12}>
                            <h2 className="text-capitalize mb-3">{displayDoctor[0]?.name}</h2>
                            <h4>Degrees: {displayDoctor[0]?.degrees}</h4>
                            <h4>age: {displayDoctor[0]?.age}</h4>
                            <h4
                                className='fs-4 mb-3'>Doctor Visiting Cost:
                                <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                    ${displayDoctor[0]?.cost}
                                </span>
                            </h4>
                            <form
                                className="d-flex flex-column"
                                onSubmit={handleSubmit(takeAppointment)}
                            >
                                <h4>Select Appointment Date</h4>
                                <input
                                    type="date"
                                    style={{
                                        border: '2px solid #32AEB1',
                                        borderRadius: '5px',
                                        padding: '10px',
                                    }}
                                    className="mt-2 w-75"
                                    {...register('date', { required: true })}
                                />
                                <input
                                    value='Take Appointment'
                                    style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                    className="mt-4 btn rounded-pill border-0 px-4 text-bold w-75"
                                    type="submit" />
                            </form>
                        </Col>
                        <Col md={4} sm={12}>
                            <GiveReview updateReview={updateReview} doctor={displayDoctor}></GiveReview>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="container">
                <h2>{displayDoctor[0]?.name}'s Reviews</h2>
                <div className="row">
                    {
                        review.map(data => <Reviews review={data}></Reviews>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default DoctorProfile;