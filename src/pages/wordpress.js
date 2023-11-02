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
    mainTitle: 'Wordpress Development',
    pageClass: 'wordress',
    subTitle:
      'Are you ready to take your e-commerce business to the next level? Partner with Graipfrüt for top-tier WordPress development that transforms your online store into a sales powerhouse.',
  });

  const [textTitle] = useState({
    sectionTitle: 'WordPress Development',
    sectionDescription:
      'Are you ready to take your e-commerce business to the next level? Partner with Graipfrüt for top-tier WordPress development that transforms your online store into a sales powerhouse.',
    subDescription:
      "<p>Our services help your business online!<br> It doesn't matter that who you are as a designer or developer at Luvimac; everyone works with the same goal in mind: to deliver a salient, eye-catching website that exceeds all expectations of our customers.</p>",
    img: '../../img/web-development/web-development.jpg',
  });
  const [services] = useState({
    sectionTitle: 'Your E-Commerce Success Begins Here',
    data: [
      {
        id: 1,
        title: 'Custom WordPress Development',
        description:
          'Experience the power of tailored solutions with our custom WordPress development services. We transform your unique ideas into user-friendly websites, ensuring your brand shines online.',
      },
      {
        id: 2,
        title: 'WooCommerce',
        description:
          'Unlock the potential of your e-commerce venture with WooCommerce. Our experts leverage its flexibility to build tailored online stores that seamlessly integrate with WordPress, driving sales and customer satisfaction.',
      },
      {
        id: 3,
        title: 'WordPress Theme Development',
        description:
          'Elevate your online presence with our custom WordPress theme development. We craft visually stunning and responsive themes that captivate your audience and deliver an exceptional user experience.',
      },

      {
        id: 4,
        title: 'PSD To WordPress Design',
        description:
          'Bring your design concepts to life with our PSD to WordPress conversion services. We meticulously translate your PSD files into pixel-perfect, fully functional WordPress websites that mirror your vision.',
      },
      {
        id: 5,
        title: 'WordPress Plug-in',
        description:
          "Enhance your website's functionality with custom WordPress plugins. Our expert developers create plugins that empower your website with advanced features, providing a seamless user experience.",
      },
      {
        id: 6,
        title: 'Maintenance & Support',
        description:
          'Secure your digital investment with our comprehensive WordPress support and maintenance. Our dedicated team ensures your website remains up to date, secure, and performing at its best, giving you peace of mind to focus on growth and innovation.',
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
                src={require('../assets/img/wordpress2.jpg')}
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
                    Build Your E-Commerce Empire With WordPress
                    <i class='fas fa-mobile-android-alt    '></i>
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    Choosing WordPress For Your Webstore
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  Step into the world of Graipfrüt's WordPress Development hub,
                  where we unleash the full potential of WordPress to craft
                  captivating, high-performance e-commerce solutions. Our
                  seasoned team of WordPress experts excels in designing and
                  developing tailor-made online stores that seamlessly blend
                  aesthetics, functionality, and sales-driven strategies,
                  ensuring your brand leaves a lasting impact and engages your
                  audience effectively.
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
              Partner With <span style={{ color: '#5ea1b2' }}>Graipfrut</span>
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
