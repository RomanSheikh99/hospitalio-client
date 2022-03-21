import { faClock, faHandHoldingMedical, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import team from '../../../images/team.jpg'
import pol from '../../../images/pol.jpg'
import Footer from '../../Sheared/Footer/Footer';
import NavBar from '../../Sheared/NavBar/NavBar';

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div
                style={{ background: '#12C1AD' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>About Us</h2>
                </Container>
            </div>
            <Container>
                <div className="row my-4">
                    <div className='col-md-5'>
                        <img className="img-fluid w-100" src={pol} alt="" />
                    </div>
                    <div className="col-md-7 p-3">
                        <h2 className="my-3">Our Policy</h2>
                        <p className=""> Hospitalio Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Dipto Hospital Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.</p>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-7 p-3">
                        <h2 className="my-3">Meet Our Team</h2>
                        <p className=""> Understanding the roles of each member of your healthcare team is important, especially when managing a chronic condition. Knowing what each professional does, and the differences between roles, will help you, the patient at the center of everyone’s job.The healthcare team, regardless of whether you’re treated at a large academic institution or a small, rural private practice, is the group of professionals who contribute to your care and treatment as a patient. Typical members of a healthcare team are a doctor and a registered nurse. </p>
                    </div>
                    <div className='col-md-5'>
                        <img className="img-fluid w-100" src={team} alt="" />
                    </div>
                </div>
                <div className="my-3">
                    <Row>
                        <Col md={3} sm={6}>
                            <div className='d-flex align-items-center'>
                                <div style={{ fontSize: '60px', marginRight: '8px' }}>
                                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>24563</h4>
                                    <span>HAPPY Patients</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='d-flex align-items-center'>
                                <div style={{ fontSize: '60px', marginRight: '8px' }}>
                                    <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>885</h4>
                                    <span>AWARDS Win</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='d-flex align-items-center'>
                                <div style={{ fontSize: '60px', marginRight: '8px' }}>
                                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>24/7</h4>
                                    <span>OPEN Hours</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='d-flex align-items-center'>
                                <div style={{ fontSize: '60px', marginRight: '8px' }}>
                                    <FontAwesomeIcon icon={faHandHoldingMedical}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h4>17380</h4>
                                    <span>SUCCESSFUL Surgery</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;