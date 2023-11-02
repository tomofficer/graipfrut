import React, { useEffect, useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import { Link } from 'react-router-dom';
// import SVGIMG from "../assets/img/technology/tools.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whychooseus from '../components/Whychooseus';
import WhyChooseUsImg from '../assets/img/digitalmarketing2.jpg';

const Technology = () => {
  const [pageTile] = useState({
    mainTitle: 'Tools & Technologies',
    pageClass: 'technology',
    subTitle:
      ' We bring together the tools and technologies you need to plan, design, develop, and manage your digital projects effectively.',
    bgImg: '../assets/img/bg-main-title/about-bg.jpg',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const [windowTop, setWindowTop] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', function () {
      setWindowTop(window.top.scrollY);
    });
  }, []);

  const [whyChooseUsServices] = useState({
    sectionTitle: 'Why Choose Us',
    leftImg: WhyChooseUsImg,
    data: [
      {
        id: 1,
        title: 'Why Should You Partner With Us?',
        description:
          '<p>Partnering with us means gaining a dedicated ally focused on your success. We leverage our extensive experience, versatility in technologies, and a client-centric approach to empower your brand and drive tangible results.</p>',
      },
      {
        id: 2,
        title: 'What Sets Graipfrut Apart?',
        description:
          '<p>What sets Graipfrüt apart is our unwavering commitment to crafting digital excellence. We blend innovation, technical expertise, and a personalized approach to deliver tailored solutions that consistently exceed expectations.</p>',
      },
      {
        id: 3,
        title: "What's Our Approach To Web Development?",
        description:
          '<p>Our approach to web development revolves around four pillars: Discovery, Design, Development, and Ongoing Support. We begin by thoroughly understanding your goals, design user-centric experiences, build robust solutions, and provide continuous support to ensure long-term success.</p>',
      },
      {
        id: 2,
        title: 'How Do We Ensure Quality & Timely Delivery?',
        description:
          '<p>Quality and timeliness are at the core of our work. We maintain clear project scopes, adhere to industry best practices, and emphasize open communication to consistently deliver high-quality projects on time.</p>',
      },
      {
        id: 2,
        title: 'Why Trust Our Expertise In Programming Languages?',
        description:
          "<p>Our team's expertise spans a diverse range of programming languages, including React, Node.js, MongoDB, PHP, Python, Vue.js, Angular, JQuery, and Laravel. We leverage this expertise to select the perfect technology stack tailored to your project's unique requirements.</p>",
      },
      {
        id: 2,
        title: 'What Ongoing Support Can You Expect From Us?',
        description:
          "<p>Our commitment doesn't end at launch. We provide continuous support, monitoring, and updates to ensure your digital solution remains secure, up-to-date, and optimized for long-term success. Your ongoing success is our priority.</p>",
      },
    ],
  });
  return (
    <>
      <Pagetitle pageTile={pageTile} />
      {/* <section className='section lm-services bg pt-100 pb-50'>
        <div className='container wd-container'>
          <div
            className='sec-title text-center'
            data-aos='fade-down'
            data-aos-delay='50'>
            <h2>Partner With Graipfrut</h2>
            <p>
              Streamlining the Development Lifecycle : From Branding and Design
              to Development and Marketing. <br />
              We bring together the tools and technologies you need to plan,
              design, develop, and manage your digital projects effectively.
              <br />
              Partnering with Graipfrüt means having a dedicated team that
              empowers your digital growth and helps you stay ahead in today's
              fast-paced digital landscape.
            </p>
          </div>
        </div>
        <div className='container wd-container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='mainImg firstImg'>
                <img
                  src={require('../assets/img/technology/technology-child-1.jpg')}
                  data-aos='fade-left'
                  data-aos-delay='300'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='mainImg secondImg'>
                <img src={require('../assets/img/technology/technology-child.jpg')} data-aos="fade-left" data-aos-delay="300" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className='our-mission section pt-100 pb-100'
        style={{ overflow: 'hidden' }}>
        <div className='container-fluid wd-container'>
          <div className='row flex-md-row-reverse'>
            <div className='col-lg-6 col-md-6 col-12 position-relative'>
              <img
                data-aos='fade-down'
                data-aos-delay='50'
                src={require('../assets/img/technology7.png')}
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
                    Explore Our Techstack
                    <i class='fas fa-mobile-android-alt    '></i>
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    A Techstack As Vast As Your Ambitions
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  At Graipfrüt, your vision becomes our mission, where our
                  seasoned development team is dedicated to bringing your
                  digital vision to life. By choosing us, you gain access to a
                  team that is well-versed in the latest industry trends and
                  technologies, ensuring your projects are not only cutting-edge
                  but also future-proof. Partnering with Graipfrüt means having
                  a dedicated team that empowers your digital growth and helps
                  you stay ahead in today's fast-paced digital landscape.
                </p>
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
      <section
        className='our-mission section pt-100 pb-100'
        style={{ overflow: 'hidden' }}>
        <div className='container-fluid wd-container'>
          <div className='row flex-md-row-reverse'>
            <div className='col-lg-6 col-md-6 col-12 position-relative'>
              <img
                data-aos='fade-down'
                data-aos-delay='50'
                src={require('../assets/img/whyChooseUs1.png')}
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
                    We've Got You Covered
                    <i class='fas fa-mobile-android-alt    '></i>
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    No Matter The Project, We've Got You Covered
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  At Graipfrüt, we boast a tech stack as vast as your digital
                  ambitions. Our wide-ranging expertise spans cutting-edge
                  technologies, ensuring that no matter your project's
                  complexity, we've got the right tools in our arsenal to bring
                  your vision to life. Partner with us to harness this diverse
                  tech landscape, and let's build digital solutions that drive
                  your success story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Whychooseus
        commonWhyChoose={whyChooseUsServices}
        whyChooseClass={'web'}
      />
    </>
  );
};
export default Technology;
