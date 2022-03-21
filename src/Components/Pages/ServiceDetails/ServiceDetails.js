import { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Sheared/Footer/Footer';
import NavBar from '../../Sheared/NavBar/NavBar';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';

const ServiceDetails = () => {
    const { serviceID } = useParams();
    const [displayService, setDisplayService] = useState([]);
    const [card, setCard] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://serene-hamlet-92817.herokuapp.com/service/${serviceID}`)
            .then(res => res.json())
            .then(data => setDisplayService(data))
    }, [displayService]);

    useEffect(() => {
        fetch(`https://serene-hamlet-92817.herokuapp.com/card/${user.email}`)
            .then(res => res.json())
            .then(data => setCard(data))    
    },[card]);

    const addToCard = () => {

        const addCard = card.find(data => data.serviceId === displayService[0]._id);

        if (addCard) {
            alert('Already Take This Service');
        } else {
            const service = {};
            service.serviceId = displayService[0]._id;
            service.serviceName = displayService[0].title;
            service.serviceCost = displayService[0].cost;
            service.serviceImg = displayService[0].img;
            service.userId = user.email;
        
            axios.post('https://serene-hamlet-92817.herokuapp.com/addCard', service).then(res => {
                if (res.data.insertedId) {
                    setCard([]);
                    alert('Add To Card');
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
                        <Col md={4}>
                            <img className="img-fluid img-thumbnail" src={displayService[0]?.img} alt="" />
                        </Col>
                        <Col md={8}>
                            <h2 className="text-capitalize mb-3">{displayService[0]?.title}</h2>
                            <p className=" text-muted">{displayService[0]?.description}</p>
                            <h4
                                className='fs-4 mb-3'>Cost For This Test:
                                <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                    ${displayService[0]?.cost}
                                </span>
                            </h4>
                            <Button
                                onClick={()=>addToCard()}
                                style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                className="rounded-pill border-0 px-4 "
                            >
                                Take This Test
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ServiceDetails;