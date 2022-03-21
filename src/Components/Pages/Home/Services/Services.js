import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../../Hooks/useServices';
import Service from '../../../Sheared/Service/Service';

const Services = () => {
    const { services } = useServices();
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <h2 className="mt-4 p-0"> Our <span className="fw-bold">Services</span></h2>
                    <div
                        style={{ marginBottom: '16px', height: '3px', width: '220px', background: '#12C1AD' }}
                    >
                    </div>
                    <p>We are committed to provide affordable services, without any compromise on <br /> the quality of service – so that you are able to remain happy.</p>
                </Row>
                <Row className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}>
                            </Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;