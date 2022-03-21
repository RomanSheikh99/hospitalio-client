import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <div className="py-4 text-white" style={{ background: '#12C1AD' }}>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={3}>
                        <div className="d-flex justify-content-center align-items-center">
                            <h2>NewsLetter</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div class="form-floating w-100">
                                <input
                                    style={{ background: '#00000030' }} 
                                    type="email"
                                    class="form-control border-0 py-3 px-3 rounded-pill text-white"
                                    id="floatingInput"
                                    placeholder="Your Email" />
                                <label for="floatingInput">Email address</label>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="d-flex justify-content-center align-items-center">
                            <button
                                className="btn bg-white rounded-pill px-4">
                                Subscribe
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Newsletter;