import React, { useEffect, useState } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Sheared/Footer/Footer';
import NavBar from '../../Sheared/NavBar/NavBar';

const DoctorProfile = () => {
    const { doctorID } = useParams();
    const [ displayDoctor, setDisplayDoctor ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/doctor/${doctorID}`)
            .then(res => res.json())
            .then(data => setDisplayDoctor(data))
    }, []);

    console.log(displayDoctor)

    return (
        <>
            <NavBar></NavBar>
            <div className="my-5">
                <Container>
                    <Row>
                        <Col md={4} sm={6}>
                            <img className="img-fluid img-thumbnail"
                                src={displayDoctor[0]?.img} alt="" />
                        </Col>
                        <Col md={8} sm={6}>
                            <h2 className="text-capitalize mb-3">{displayDoctor[0]?.name}</h2>
                            <h4>Degrees: {displayDoctor[0]?.degrees}</h4>
                            <h4>age: {displayDoctor[0]?.age}</h4>
                            <h4
                                className='fs-4 mb-3'>Doctor Visiting Cost:
                                <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                    ${displayDoctor[0]?.cost}
                                </span>
                            </h4>
                            <Button
                                style={{ background: '#12C1AD', outline: 'none' }}
                                className="rounded-pill border-0 px-4 ">
                                <Link
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    to='/welldone'>
                                    Call For Appointment
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default DoctorProfile;