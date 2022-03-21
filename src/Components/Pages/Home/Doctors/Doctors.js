import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDoctors from '../../../../Hooks/useDoctors';
import Doctor from '../../../Sheared/Doctor/Doctor';

const Doctors = () => {
    const { doctors } = useDoctors();
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <h2 className="mt-4 p-0"> Meet Our <span className="fw-bold">Doctors</span></h2>
                    <div
                        style={{ marginBottom: '16px', height: '3px', width: '220px', background: '#12C1AD' }}
                    >
                    </div>
                </Row>
                <Row className="g-4">
                    {
                        doctors.map(doctor => {
                            if (doctors.indexOf(doctor) < 3) {
                                return <Doctor
                                    key={doctor._id}
                                    doctor={doctor}>
                                </Doctor>
                            }
                        })
                    }
                </Row>
                <div className="d-flex justify-content-center mt-4">
                    
                        <Link
                            className="rounded-pill border-0 px-4 py-2 doctors-btn"
                            to='/doctors'>
                            Meet All Doctors
                        </Link>
                    
                </div>
            </Container>
        </div>
    );
};

export default Doctors;