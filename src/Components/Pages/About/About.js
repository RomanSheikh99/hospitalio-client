import { faClock, faHandHoldingMedical, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import team from '../../../images/team.png'
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
                <div className="text-center my-3">
                    <h2 className="my-3">A LITTLE BIT ABOUT US</h2>
                    <p className="px-5">Dipto Hospital Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Dipto Hospital Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.</p>
                    <div>
                        <img className="img-fluid" src={team} alt="" />
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