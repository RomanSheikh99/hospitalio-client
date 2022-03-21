import React from 'react';
import { Carousel} from 'react-bootstrap';
import slide1 from '../../../../images/slide/slide01.jpg'
import slide2 from '../../../../images/slide/slide02.jpg'
import slide3 from '../../../../images/slide/slide03.jpg'
import slide4 from '../../../../images/slide/slide04.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;