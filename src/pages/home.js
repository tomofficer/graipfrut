import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HomeMainTitle } from '../components/homeMainTitle';
const Home = (data) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  const [homeServices] = useState([
    {
      id: 1,
      title: 'Web Development',
      description:
        'Crafting Dynamic & Responsive Websites that Speak Your Brand Language.',
    },
    {
      id: 2,
      title: 'App Development',
      description:
        'Developing Intuitive and User-friendly Apps that Resonate with Your Audience.',
    },
    {
      id: 3,
      title: 'E-commerce Dev',
      description:
        'Robust E-commerce Solutions that Amplify User Engagement and Skyrocket Sales.',
    },
    {
      id: 4,
      title: 'Wordpress Development',
      description:
        'Custom Wordpress solutions precisely tailored to your unique business requirements.',
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description:
        'Elevating Your Brand with Strategic Digital Marketing for Optimal Online Visibility.',
    },
  ]);

  const [HomeOurServices] = useState([
    {
      id: 7,
      title: 'Frontend Development',
      description: 'React, Angular, Vue.js, Typescript',
    },
    {
      id: 8,
      title: 'Backend Development',
      description: 'Node.js, PHP, Python, .Net',
    },
    {
      id: 9,
      title: 'App Development',
      description: 'iOs, Android, React Native, Flutter',
    },
    {
      id: 10,
      title: 'E-Commerce Dev',
      description: 'Wordpress, Magento, Shopify',
    },
    {
      id: 11,
      title: 'UI/UX Design',
      description: 'Figma, Webflow, Adobe Xd',
    },
    {
      id: 12,
      title: 'Database',
      description: 'Firebase, MySQL, MsSQL, PostgreSQL',
    },
  ]);

  const [mainTitle] = useState({
    title: 'Web Experts',
    paragraph:
      "We're a forward-thinking Web Development Agency that leverages the power of AI to provide dynamic web solutions unique to your business needs, delivering superior websites, webshops, and mobile apps.",
  });

  useEffect(() => {
    const passion_parallax = document.getElementById('passion_parallax');
    window.addEventListener('scroll', function () {
      let offset = window.pageYOffset;
      if (passion_parallax !== null) {
        passion_parallax.style.backgroundPositionY = offset * 0.7 + 'px';
      }
    });
  }, []);

  return (
    <div className='home'>
      <HomeMainTitle data={mainTitle} />
      <section className='section lm-services pt-100 pb-100'>
        <div className='container wd-container'>
          <div className='sec-title text-center'>
            <h2 data-aos='fade-left' data-aos-delay='50'>
              Welcome To Graipfrut
            </h2>
            <div
              className='sub-text'
              data-aos='fade-right'
              data-aos-delay='200'>
              <p>
                Partner with us and explore a world of digital innovation as we
                lead you through
                <br /> our creative journey of web development, app design, and
                digital marketing expertise.
              </p>
            </div>
          </div>
          {homeServices.map((service, index) => (
            <div className='row home_services' key={service.id}>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='srvs-single-box stl-one'>
                  <div className='ctn-box text-left'>
                    <h2 data-aos='fade-down' data-aos-delay='50'>
                      {index + 1}. {service.title}
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
        </div>
      </section>

      <section
        className='lm-passion section d-flex align-items-center'
        id='passion_parallax'>
        <div className='container'>
          <div className='sec-title text-center'>
            <h2 data-aos='fade-right' data-aos-delay='50'>
              Shape Your Digital Future With{' '}
              <span style={{ color: '#FFDC4D' }}>Graipfrut</span>
            </h2>
            <p data-aos='fade-left' data-aos-delay='50'>
              {/* <small> */}
              Unlock the Power of Advanced AI to Craft Engaging, High-Impact
              Online Platforms that Drive Revenue.
              {/* </small> */}
            </p>
          </div>
        </div>
      </section>

      <section className='section lm-home-services pt-100 pb-100'>
        <div className='container wd-container'>
          <div className='sec-title text-center'>
            <h2 data-aos='fade-down' data-aos-delay='50'>
              Our Services
            </h2>
            <div className='sub-text max-800 mx-auto'>
              <p data-aos='fade-up' data-aos-delay='50'>
                Unleash the power of Graipfrüt! Our diverse services, ranging
                from Web and App Development to E-commerce, Digital Marketing &
                SEO, Lifetime Maintenance & Support, and Branding & Design, are
                tailored to propel your brand to new heights in the digital
                realm.
              </p>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-12 mb-5'
              data-aos='fade-down'
              data-aos-delay='50'>
              <img
                src={require('../assets/img/idea1.jpg')}
                className='img-fluid'
                style={{ width: '100%' }}
                alt=''
              />
            </div>
          </div>
          {HomeOurServices.map((service, index) => (
            <div className='row home_services' key={service.id}>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='srvs-single-box stl-one'>
                  <div className='ctn-box text-left'>
                    <h2 data-aos='fade-up' data-aos-delay='50'>
                      {index + 1}. {service.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-md-6 col-12'>
                <div className='srvs-single-box stl-one'>
                  <div className='ctn-box text-left'>
                    <p data-aos='fade-up' data-aos-delay='50'>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='lm-hm-talk'>
        <div className='container text-center'>
          <h3 className='h2 pt-3'>
            We've got you covered:
            <br />{' '}
            <Typed
              strings={[
                'Web Development',
                'Mobile App Development',
                'E-Commerce Development',
                'Frontend Development',
                'Backend Development',
                'UI/UX Design',
                'SEO & Digital Marketing',
              ]}
              typeSpeed={40}
              backSpeed={20}
              loop
            />
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Home;
