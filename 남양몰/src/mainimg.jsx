import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Mainimg() {
    return (
        <div className='subimg' id='mainimg'>
            <Carousel>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '300px', background: 'red', color: '#fff' }}>
                        <h3>슬라이드01</h3>
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '300px', background: 'green', color: '#fff' }}>
                        <h3>슬라이드02</h3>
                    </div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '300px', background: 'blue', color: '#fff' }}>
                        <h3>슬라이드03</h3>
                    </div>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '300px', background: 'red', color: '#fff' }}>
                        <h3>슬라이드04</h3>
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Mainimg;