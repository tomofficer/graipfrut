import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import PagetitleAboutUs from '../components/PagtitleAboutUs';
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
    bgImg: '../assets/img/about/graiprut-hero2.jpg',
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

  const divStyle1 = {
    backgroundColor: isHovered1 ? 'black' : 'white',
    color: isHovered1 ? 'white' : 'black',
    border: '3px solid black',
  };

  return (
    <>
      <PagetitleAboutUs pageTile={pageTile} />
      <div className='container wd-container'>
        <div
          className='sec-title text-center'
          data-aos='fade-down'
          data-aos-delay='50'>
          <h2>About Us</h2>
          <p>
            We are a forward-thinking, AI-driven web development agency
            dedicated to delivering digital excellence.
            <br />
            We bring together the tools and technologies you need to plan,
            design, develop, and manage your digital projects effectively.
            {/* <br />
              Partnering with Graipfrüt means having a dedicated team that
              empowers your digital growth and helps you stay ahead in today's
              fast-paced digital landscape. */}
          </p>
        </div>
      </div>
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
                    Partner With Graipfrut
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    Our Mission. Our Vision. Our Journey
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  We are an AI-driven web development agency dedicated to
                  delivering digital excellence. From Branding and Design to
                  Development and Marketing, we leverage the power of AI to
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
            <p data-aos='fade-up' data-aos-delay='50'>
              At Graipfrut, our expertise spans a wide spectrum of digital
              services, from crafting visually stunning websites to developing{' '}
              <br /> cutting-edge mobile apps. Discover how we can transform
              your ideas into a digital empire.
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

      <section
        className='our-mission section pt-100 pb-100'
        style={{ overflow: 'hidden' }}>
        <div className='container-fluid wd-container'>
          <div className='row flex-md-row-reverse'>
            <div className='col-lg-6 col-md-6 col-12 position-relative'>
              <img
                data-aos='fade-down'
                data-aos-delay='50'
                src={require('../assets/img/team2.png')}
                className='img-fluid'
                alt=''
              />
              {/* <div
                className='bgImg'
                style={{
                  transform:
                    'translate3d(0px, ' + (-80 + windowTop / 5) + 'px , 0px)',
                }}></div> */}
            </div>
            <div className='col-lg-6 col-md-6 col-12 d-flex align-items-center'>
              <div className='ctn-box'>
                <div className='sec-title line-left'>
                  <h2 data-aos='fade-down' data-aos-delay='50'>
                    Meet Our Team
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    Developers On Call To Handle Any Project
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  At Graipfrüt, our strength lies in our diverse team of
                  developers, always on call to handle projects across a wide
                  range of tech stacks. With an array of skills and expertise at
                  our disposal, we're well-equipped to tackle any project, no
                  matter the complexity or scope. From front-end wizards to
                  back-end gurus, our dynamic team ensures that your project
                  benefits from a wealth of knowledge and creativity. Whether
                  it's web development, app development, e-commerce solutions,
                  or digital marketing, our team is ready to make your vision a
                  reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
