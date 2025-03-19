import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css";

function HomeBanner() {
    return (
        <section className='home-banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Carousel fade>
                            <Carousel.Item>
                                <img src={"/assets/banner-new.webp"} alt='banner' />
                                <Carousel.Caption id='first'>
                                    <h3>Leading Educational Study Centre</h3>
                                    <p>Welcome To Nova Education, We Make Your Dream Come True</p>
                                    <div className='caption-button'>
                                        <button className='header-contact-button'>Contact Us</button>
                                    </div>
                                </Carousel.Caption>
                                <Carousel.Caption>
                                    <h3>Leading Educational Study Centre</h3>
                                    <p>Welcome To Nova Education, We Make Your Dream Come True</p>
                                    <div className='caption-button'>
                                        <button className='header-contact-button'>Contact Us</button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={"/assets/banner-new.webp"} alt='banner' />
                                <Carousel.Caption>
                                    <h3>Leading Educational Study Centre</h3>
                                    <p>Welcome To Nova Education, We Make Your Dream Come True</p>
                                    <div className='caption-button'>
                                        <button className='header-contact-button'>Contact Us</button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={"/assets/banner-new.webp"} alt='banner' />
                                <Carousel.Caption>
                                    <h3>Leading Educational Study Centre</h3>
                                    <p>Welcome To Nova Education, We Make Your Dream Come True</p>
                                    <div className='caption-button'>
                                        <button className='header-contact-button'>Contact Us</button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;