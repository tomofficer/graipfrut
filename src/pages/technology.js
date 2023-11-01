import React, { useEffect, useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import { Link } from 'react-router-dom';
// import SVGIMG from "../assets/img/technology/tools.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Technology = () => {
  const [pageTile] = useState({
    mainTitle: 'Technology',
    pageClass: 'technology',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    bgImg: '../assets/img/bg-main-title/about-bg.jpg',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  return (
    <>
      <Pagetitle pageTile={pageTile} />
      <section className='section lm-services bg pt-100 pb-50'>
        <div className='container wd-container'>
          <div
            className='sec-title text-center'
            data-aos='fade-down'
            data-aos-delay='50'>
            <h2>Our Tools & Technologies</h2>
            <p>
              Streamlining the Development Lifecycle : From Branding and Design
              to Development and Marketing. <br />
              We bring together the tools and technologies you need to plan,
              design, develop, and manage your digital projects effectively.
              {/* <br />
              Partnering with Graipfrüt means having a dedicated team that
              empowers your digital growth and helps you stay ahead in today's
              fast-paced digital landscape. */}
            </p>
          </div>
        </div>
        <div className='container wd-container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='mainImg firstImg'>
                {/* <img
                  src={require('../assets/img/technology/technology-child-1.jpg')}
                  data-aos='fade-left'
                  data-aos-delay='300'
                  className='img-fluid'
                  alt=''
                /> */}
              </div>
            </div>
            <div className='col-md-4'>
              <div className='mainImg secondImg'>
                {/* <img src={require('../assets/img/technology/technology-child.jpg')} data-aos="fade-left" data-aos-delay="300" className="img-fluid" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section lm-services bg pt-50 pb-50'>
        <div className='container wd-container'>
          <div className='row web-development'>
            <div className='d-flex align-items-center col-md-6 mb-5 order-md-1'>
              <div className='ctn-box'>
                <div
                  className='sec-title text-center text-md-left'
                  data-aos='fade-down'
                  data-aos-delay='50'>
                  <h2 className='mb-0'>Frontend Development</h2>
                </div>
                <p
                  className=' text-center text-md-left'
                  data-aos='fade-right'
                  data-aos-delay='50'>
                  At Graipfrüt, we understand that the frontend of your digital
                  presence is the face of your brand, and we craft it with
                  utmost care. Our frontend development team excels in creating
                  visually captivating and highly interactive user interfaces
                  that captivate and engage your audience. Using a versatile
                  array of frontend technologies, we transform design concepts
                  into seamless, user-friendly experiences across various
                  devices and browsers. Whether it's responsive web design,
                  intuitive navigation, or pixel-perfect layouts, we ensure that
                  every element of your frontend is finely tuned to reflect your
                  brand's identity.
                </p>
              </div>
            </div>
            <div className='d-flex align-items-center col-md-6 mb-5 order-md-2'>
              <div className='technology-tools d-flex justify-content-center flex-wrap'>
                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/frontend/reactjs.png')}
                    alt='html'
                  />
                  <div className='technology-name'>React</div>
                </Link>

                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/frontend/angular.png')}
                    alt='html'
                  />
                  <div className='technology-name'>Angular</div>
                </Link>

                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/frontend/pwa.png')}
                    alt='html'
                  />
                  <div className='technology-name'>PWA</div>
                </Link>

                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/frontend/vue.png')}
                    alt='html'
                  />
                  <div className='technology-name'>Vue</div>
                </Link>
              </div>
            </div>
            <div className='d-flex align-items-center col-md-6 mb-5 order-md-4'>
              <div className='ctn-box mt-5 mt-md-0'>
                <div
                  className='sec-title text-center text-md-right'
                  data-aos='fade-down'
                  data-aos-delay='50'>
                  <h2>Backend Development</h2>
                </div>
                <div
                  className='content-box text-center text-md-right'
                  data-aos='fade-right'
                  data-aos-delay='50'>
                  <p>
                    Our backend development prowess is the engine that powers
                    your digital solutions. Our dedicated team of experts
                    leverages a robust toolkit of backend technologies,
                    meticulously selected to ensure optimal performance,
                    security, and scalability. From database management to
                    server-side scripting, we handle the technical complexities
                    behind the scenes, allowing you to focus on delivering
                    exceptional user experiences. With a keen eye on efficiency
                    and stability, we tailor our backend solutions to meet your
                    specific needs, providing a solid foundation for your web
                    applications and ensuring they run seamlessly, even as
                    demands grow.
                  </p>
                </div>
              </div>
            </div>

            <div className='d-flex align-items-center col-md-6 mb-5 order-md-3'>
              <div className='technology-tools d-flex justify-content-center flex-wrap'>
                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/backend/php.png')}
                    alt='html'
                  />
                  <div className='technology-name'>PHP</div>
                </Link>
                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/backend/node.webp')}
                    alt='html'
                  />
                  <div className='technology-name'>Node</div>
                </Link>
                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/backend/laravel.png')}
                    alt='html'
                  />
                  <div className='technology-name'>Laravel</div>
                </Link>
                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/backend/python.png')}
                    alt='html'
                  />
                  <div className='technology-name'>Python</div>
                </Link>
              </div>
            </div>

            <div className='d-flex align-items-center col-md-6 mb-5 order-md-5'>
              <div className='ctn-box mt-5'>
                <div
                  className='sec-title text-center text-md-left'
                  data-aos='fade-down'
                  data-aos-delay='50'>
                  <h2>Mobile App Development</h2>
                </div>
                <p
                  className=' text-center text-md-left'
                  data-aos='fade-right'
                  data-aos-delay='50'>
                  We're dedicated to creating mobile app experiences that
                  resonate with users and drive results. Our Mobile App
                  Development team is passionate about turning your app ideas
                  into reality. Our dedicated team of experts specializes in
                  creating robust, user-friendly, and feature-rich mobile
                  applications that resonate with your audience. Whether you
                  need iOS, Android, or cross-platform solutions, we have the
                  expertise to deliver. From concept to launch and beyond, we're
                  with you every step of the way.
                </p>
              </div>
            </div>
            <div className='d-flex align-items-center col-md-6 mb-5 order-md-6'>
              <div className='technology-tools d-flex justify-content-center flex-wrap'>
                <Link
                  to='/android-app-development'
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/mobile/android-icon.png')}
                    alt='html'
                  />
                  <div className='technology-name'>Android</div>
                </Link>

                <Link
                  to='/ios-app-development'
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/mobile/apple-icon.png')}
                    alt='html'
                  />
                  <div className='technology-name'>iOS</div>
                </Link>

                <Link
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/mobile/ionic-icon.png')}
                    alt='html'
                  />
                  <div className='technology-name'>Ionic</div>
                </Link>

                <Link
                  to='/flutter-app-development'
                  className='technology-item'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  <img
                    src={require('../assets/img/technology/mobile/flutter-icon.png')}
                    alt='html'
                  />
                  <div className='technology-name'>Flutter</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Technology;
