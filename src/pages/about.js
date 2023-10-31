import React, { useEffect, useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  const [pageTile] = useState({
    mainTitle: 'About Us',
    pageClass: 'about-us',
    subTitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    bgImg: '../assets/img/home/graipfrutBg.jpg',
  });

  const [services] = useState([
    {
      id: 1,
      title: 'Our Mission',
      description:
        'Our mission is to design and develop modern, elegant websites that not only dazzle visually but also perform brilliantly. We implement AI solutions that streamline processes, enhance efficiency, and ultimately save our clients money.',
    },
    {
      id: 2,
      title: 'Our Vision',
      description:
        'Partner with us to build your online presence. Our vision drives us to offer a comprehensive range of services, all rooted in our commitment to crafting digital excellence and helping you thrive in the digital landscape.',
    },
    {
      id: 3,
      title: 'Our Journey',
      description:
        "At Graipfrüt, our commitment is unwavering, and we're dedicated to delivering high-quality websites and software that exceed your expectations. Ready to start your journey? Schedule your free consultation using the link below now!",
    },
  ]);

  const [windowTop, setWindowTop] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', function () {
      setWindowTop(window.top.scrollY);
    });
  }, []);

  //inline hover state
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const divStyle1 = {
    backgroundColor: isHovered1 ? 'black' : 'white',
    color: isHovered1 ? 'white' : 'black',
    border: '3px solid black',
  };

  const divStyle2 = {
    backgroundColor: isHovered2 ? 'black' : 'white',
    color: isHovered2 ? 'white' : 'black',
    border: 'none',
  };

  return (
    <>
      <Pagetitle pageTile={pageTile} />
      <section
        className='our-mission section pt-100 pb-100'
        style={{ overflow: 'hidden' }}>
        <div className='container-fluid wd-container'>
          <div className='row flex-md-row-reverse'>
            <div className='col-lg-6 col-md-6 col-12 position-relative'>
              <img
                data-aos='fade-down'
                data-aos-delay='50'
                src={require('../assets/img/about/graipfrut-hero2.jpg')}
                className='img-fluid'
                alt=''
              />
              <div
                className='bgImg'
                style={{
                  transform:
                    'translate3d(0px, ' + (-80 + windowTop / 5) + 'px , 0px)',
                }}></div>
            </div>
            <div className='col-lg-6 col-md-6 col-12 d-flex align-items-center'>
              <div className='ctn-box'>
                <div className='sec-title line-left'>
                  <h2 data-aos='fade-down' data-aos-delay='50'>
                    About Us
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    Our Mission. Our Vision. Our Journey
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  We are an AI-driven web development agency dedicated to
                  delivering digital excellence. We leverage the power of AI to
                  create dynamic web solutions that not only enhance your online
                  presence but also optimize conversions and boost ROI. With
                  specialized teams in web development, app development,
                  e-commerce development, and digital marketing, we are
                  committed to surpassing expectations and maximizing your
                  digital success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section lm-services bg pt-100 pb-100'>
        <div className='container wd-container'>
          <div className='sec-title text-center'>
            <h2 data-aos='fade-down' data-aos-delay='50'>
              What We Do
            </h2>
            <p
              data-aos='fade-up'
              data-aos-delay='50'
              style={{ padding: '0px 200px' }}>
              At Graipfrut, our expertise spans a wide spectrum of digital
              services, from crafting visually stunning websites to developing
              cutting-edge mobile apps. Discover how we can transform your ideas
              into a digital empire.
            </p>
          </div>
          {services.map((service) => (
            <div className='row about_services' key={service.id}>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='srvs-single-box stl-one'>
                  <div className='ctn-box text-left'>
                    <h2 data-aos='fade-down' data-aos-delay='50'>
                      {service.id}. {service.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-md-6 col-12'>
                <div className='srvs-single-box stl-one'>
                  <div className='ctn-box text-left'>
                    <p data-aos='fade-down' data-aos-delay='50'>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='row'>
            <div className='col-12 text-center'>
              <Link
                to='/contact-us'
                className='btn cta-black'
                data-aos='fade-down'
                data-aos-delay='50'
                style={divStyle1}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}>
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='get-started section'>
        <div className='container d-flex align-items-center justify-content-center'>
          <div className='box-container'>
            <div className='sec-title wt text-center'>
              <h2 data-aos='fade-down' data-aos-delay='50'>
                Have Questions?
              </h2>
              <p data-aos='fade-up' data-aos-delay='50'>
                If you're curious about how we can help or have any questions
                about our services, don't hesitate to contact us. We're
                committed to delivering the information and support you need.
              </p>
              <Link
                to='/contact-us'
                data-aos='fade-down'
                data-aos-delay='50'
                className='btn cta-black-outline'
                style={divStyle2}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
