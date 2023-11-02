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
    mainTitle: 'Android Development',
    pageClass: 'android',
    subTitle:
      'Uncover Possibilities, Create Solutions, and Make an Impact in the Android Ecosystem. Partner with Graipfrüt: Your Vision, Our Expertise. Together, We Craft Exceptional Android Apps.',
  });

  const [textTitle] = useState({
    sectionTitle: 'Android App Development',
    sectionDescription:
      'Uncover Possibilities, Create Solutions, and Make an Impact in the Android Ecosystem. Partner with Graipfrüt: Your Vision, Our Expertise. Together, We Craft Exceptional Android Apps.',
    subTitle: 'We excel at digital-marketing',
    subDescription:
      "<p>Our services help your business online!<br> It doesn't matter that who you are as a designer or developer at Luvimac; everyone works with the same goal in mind: to deliver a salient, eye-catching website that exceeds all expectations of our customers.</p>",
    img: '../../img/web-development/web-development.jpg',
  });
  const [services] = useState({
    sectionTitle: 'The Roadmap To Android App Success',
    data: [
      {
        id: 1,
        title: 'Sprint',
        description:
          "Our Sprint phase is the inception of your Android app journey. Here, we collaborate to create a prototype, verifying proof of concept before diving into development. This strategic step ensures that your app's foundation aligns with your goals, setting the stage for an effective development process.",
      },
      {
        id: 2,
        title: 'App Design',
        description:
          "In the 'App Design' phase, we meticulously craft the visual and user experience elements of your Android app. Our design experts blend creativity with user-centric principles to ensure your app not only looks stunning but also provides an intuitive and engaging user journey.",
      },
      {
        id: 3,
        title: 'App Development',
        description:
          "In the 'App Development' phase, our skilled developers bring your Android app to life, meticulously coding, testing, and refining every feature. We follow industry best practices and ensure that your app is not only functional but also performance-optimized, setting the stage for a seamless and powerful user experience.",
      },
      {
        id: 4,
        title: 'Maintenance & Support',
        description:
          "Our commitment doesn't end with development. In the 'Maintenance & Support' phase, we provide ongoing assistance, updates, and monitoring to ensure your Android app remains up-to-date, secure, and aligned with evolving user needs. With Graipfrüt, your app is in safe hands for continuous success.",
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
                src={require('../assets/img/idea1.png')}
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
                    Empowering Your Business With Android
                    <i class='fas fa-mobile-android-alt    '></i>
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    Discover The Benefits Of Android : Build With Us
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  We believe that every Android app has the potential to make a
                  significant impact. We craft Android apps that not only meet
                  your business needs but ultimately drive success in the
                  competitive app landscape. From inception to launch and
                  beyond, our commitment to ongoing maintenance and support
                  guarantees that your Android app continues to shine, providing
                  lasting value for your business.
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
