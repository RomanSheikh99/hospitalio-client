import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../../Hooks/useDoctors';
import Doctor from '../../Sheared/Doctor/Doctor';
import Footer from '../../Sheared/Footer/Footer';
import NavBar from '../../Sheared/NavBar/NavBar';

const OurDoctors = () => {
    const { doctors } = useDoctors();
    return (
        <>
            <NavBar></NavBar>
            <div>
                <div
                    style={{ background: '#12C1AD' }}
                    className="fw-bold py-4  text-white">
                    <Container>
                        <h2>Our Honorable Doctors</h2>
                    </Container>
                </div>
                <Container className="my-5">
                    <Row className="g-4">
                        {
                            doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                        }
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default OurDoctors;