import React, { useEffect, useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import TextTitle from '../components/TextTitle';
import DoWeWorks from '../components/DoWeWorks';
import OurApproach from '../components/OurApproach';
import Whychooseus from '../components/Whychooseus';
import WhyChooseUsImg from '../assets/img/digitalmarketing2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  const [pageTile] = useState({
    mainTitle: 'Web Development',
    pageClass: 'webDevelopment',
    subTitle:
      "We're more than just a web development agency; we're your trusted partner on the journey to building a powerful online presence that engages, captivates, and drives success for your business.",
  });

  const [textTitle] = useState({
    sectionTitle: 'Web Development',
    sectionDescription:
      "We're more than just a web development agency; we're your trusted partner on the journey to building a powerful online presence that engages, captivates, and drives success for your business.",
    subTitle: 'We excel at Web Design & Development',
    subDescription:
      "<p>Our services help your business online!<br> It doesn't matter that who you are as a designer or developer at Luvimac; everyone works with the same goal in mind: to deliver a salient, eye-catching website that exceeds all expectations of our customers.</p>",
    img: '../../img/web-development/web-development.jpg',
  });
  const [services] = useState({
    sectionTitle: 'Helping Your Business Succeed Online',
    data: [
      {
        id: 1,
        title: 'Professional Websites',
        description:
          "We specialize in crafting professional websites that not only showcase your brand's identity but also provide a seamless user experience. Our designs are tailored to engage your audience, drive conversions, and establish a strong online presence.",
      },
      {
        id: 2,
        title: 'E-Commerce Webshops',
        description:
          "Our custom webshops are meticulously designed to cater to your unique e-commerce needs. Whether you're starting a new online store or looking to revamp an existing one, our solutions are tailored to boost sales, enhance user experiences, and maximize your online potential.",
      },
      {
        id: 3,
        title: 'Custom Web Apps',
        description:
          'Our custom web apps are engineered to streamline your business processes and engage users with intuitive functionality. We create tailored solutions that enhance efficiency and productivity, converting new visitors into customers and creating new sales opportunities.',
      },

      {
        id: 4,
        title: 'Framework Technologies',
        description:
          'We have a skilled team fluent in a diverse tech stack ranging from React, Node.js, MongoDB, PHP, Python, Vue.js, Angular, JQuery, to Laravel and more - enabling us to create dynamic, scalable web solutions tailored to your specific business needs. ',
      },
      {
        id: 5,
        title: 'Laravel',
        description:
          'We have skilled Laravel developers in house to create new or take over existing Laravel projects. With Laravel, we create tailored solutions that seamlessly blend functionality and aesthetics, ensuring your web project stands out.',
      },
      {
        id: 6,
        title: 'UI/UX Design',
        description:
          'We are passionate about crafting exceptional user interfaces and experiences that resonate with your audience. Our UI/UX design expertise ensures that your digital solutions not only look stunning but also leave a lasting impression on users.',
      },
    ],
  });

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

  const [windowTop, setWindowTop] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', function () {
      setWindowTop(window.top.scrollY);
    });
  }, []);

  return (
    <>
      <Pagetitle pageTile={pageTile} />
      {/* <TextTitle textTitleServices={textTitle} /> */}
      <section
        className='our-mission section pt-100 pb-100'
        style={{ overflow: 'hidden' }}>
        <div className='container-fluid wd-container'>
          <div className='row flex-md-row-reverse'>
            <div className='col-lg-6 col-md-6 col-12 position-relative'>
              <img
                data-aos='fade-down'
                data-aos-delay='50'
                src={require('../assets/img/webdev3.png')}
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
                    Modern Web Experts
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    Navigating Success In The Digital World
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  At Graipfrüt, we understand that success in the digital world
                  requires more than just a website; it demands a strategic
                  blend of innovation, expertise, and tailored solutions. From
                  seamlessly integrating APIs for real-time data updates and
                  crafting web applications that engage users at every click, to
                  building custom websites that mirror your unique brand and
                  optimizing e-commerce shops for maximum sales potential - we
                  can bring your digital vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DoWeWorks commonServices={services} />
      <section className='lm-passion section d-flex align-items-center'>
        <div className='container'>
          <div className='sec-title text-center'>
            <h2 data-aos='fade-down' data-aos-delay='50'>
              Partner With <span style={{ color: '#FFDC4D' }}>Graipfrut</span>
            </h2>
            <p data-aos='fade-up' data-aos-delay='50'>
              <small>
                At Graipfrut, your vision becomes our mission. By partnering
                with us you gain access to a team that is well-versed in the{' '}
                <br />
                latest industry trends and technologies, ensuring your projects
                are not only cutting-edge but also future-proof.
              </small>
            </p>
          </div>
        </div>
      </section>
      <OurApproach />
      <Whychooseus
        commonWhyChoose={whyChooseUsServices}
        whyChooseClass={'web'}
      />
    </>
  );
};

export default WebDevelopment;
