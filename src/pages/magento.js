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
    mainTitle: 'Magento Development',
    pageClass: 'Magento',
    subTitle:
      'Are you ready to take your e-commerce business to the next level? Partner with Graipfrüt for top-tier Magento development that transforms your online store into a sales powerhouse.',
  });

  const [textTitle] = useState({
    sectionTitle: 'Magento Development',
    sectionDescription:
      'Are you ready to take your e-commerce business to the next level? Partner with Graipfrüt for top-tier Magento development that transforms your online store into a sales powerhouse.',
    subTitle: 'We excel at digital-marketing',
    subDescription:
      "<p>Our services help your business online!<br> It doesn't matter that who you are as a designer or developer at Luvimac; everyone works with the same goal in mind: to deliver a salient, eye-catching website that exceeds all expectations of our customers.</p>",
    img: '../../img/web-development/web-development.jpg',
  });
  const [services] = useState({
    sectionTitle: 'Your E-Commerce Success Begins Here',
    data: [
      {
        id: 1,
        title: 'Custom Magento Development',
        description:
          'Unlock the full potential of your online store with our custom Magento development services. Our expert developers tailor solutions to your unique business needs, ensuring your e-commerce platform is powerful, flexible, and capable of driving sales.',
      },
      {
        id: 2,
        title: 'Magento Theme Development',
        description:
          "Elevate your e-commerce site's aesthetics and functionality with custom Magento theme development. We craft visually stunning and responsive themes that captivate your audience and provide an exceptional user experience.",
      },
      {
        id: 3,
        title: 'Magento Version Upgrade',
        description:
          'Stay up to date with the latest features, security enhancements, and performance improvements by partnering with us for seamless Magento version upgrades. We ensure a smooth transition, preserving your data and functionality while keeping your online store at the forefront of technology.',
      },
      {
        id: 4,
        title: 'Magento Performance Optimization',
        description:
          "Accelerate your online store's success with Magento performance optimization. Our experts fine-tune your platform for lightning-fast page load times, ensuring smooth user experiences that drive higher sales and customer satisfaction.",
      },
      {
        id: 5,
        title: 'Magento Extension Integration ',
        description:
          "Enhance your store's capabilities and expand its functionality by seamlessly integrating third-party extensions and plugins. Our developers expertly integrate extensions to provide additional features, boosting your e-commerce potential.",
      },
      {
        id: 6,
        title: 'Payment Gateway Integration',
        description:
          'Simplify transactions, improve security, and expand your customer base with our secure payment gateway integrations. We ensure that your online store accepts a wide range of payment methods, making it convenient for your customers to shop with confidence.',
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
                src={require('../assets/img/magento1.jpg')}
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
                    Build Your E-Commerce Empire With Magento
                    <i class='fas fa-mobile-android-alt    '></i>
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    Choosing Magento For Your Webstore
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  Our dedicated team of expert Magento developers specializes in
                  crafting robust, feature-rich e-commerce solutions that not
                  only drive sales but also elevate the overall user experience.
                  With a deep understanding of the e-commerce landscape, we
                  bring your vision to life by leveraging Magento's powerful
                  capabilities. Whether you're aiming to create a new online
                  store or enhance an existing one, partnering with Graipfrüt
                  ensures that your e-commerce dreams are transformed into a
                  thriving reality.
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
