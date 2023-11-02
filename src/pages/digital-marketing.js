import React, { useEffect, useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import TextTitle from '../components/TextTitle';
import DoWeWorks from '../components/DoWeWorks';
import OurApproach2 from '../components/OurApproach2';
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
    mainTitle: 'SEO & Digital Marketing',
    pageClass: 'digitalMarketing',
    subTitle:
      'Digital Marketing is the cornerstone of modern business success. Our expertise in SEO, content marketing, social media strategies, and paid advertising empowers your brand to thrive.',
  });

  const [textTitle] = useState({
    sectionTitle: 'SEO & Digital Marketing',
    sectionDescription:
      'Digital Marketing is the cornerstone of modern business success. Our expertise in SEO, content marketing, social media strategies, and paid advertising empowers your brand to thrive.',
    subDescription:
      "<p>Our services help your business online!<br> It doesn't matter that who you are as a designer or developer at Luvimac; everyone works with the same goal in mind: to deliver a salient, eye-catching website that exceeds all expectations of our customers.</p>",
    img: '../../img/web-development/web-development.jpg',
  });
  const [services] = useState({
    sectionTitle: 'The Roadmap To Digital Marketing Success Begins Here',
    data: [
      {
        id: 1,
        title: 'SEO',
        description:
          "Our SEO services are designed to optimize your website's visibility in search engines, increasing organic traffic and helping you rank higher for relevant keywords. We focus on both on-page and off-page SEO strategies to ensure your online presence shines.",
      },
      {
        id: 2,
        title: 'Google Ads',
        description:
          'Harness the power of Google Ads to target potential customers with precision. Our experts create and manage high-performing ad campaigns that drive qualified leads, conversions, and a strong return on investment.',
      },
      {
        id: 3,
        title: 'Link Building',
        description:
          "Enhance your website's authority and search engine ranking with our strategic link-building services. We build high-quality, relevant backlinks that strengthen your online presence and boost your website's credibility.",
      },
      {
        id: 4,
        title: 'Social Media Advertising',
        description:
          'Expand your reach and engage your audience through strategic social media advertising. We craft compelling ad campaigns on platforms like Facebook, Instagram, and LinkedIn to connect with your target demographic and achieve measurable results.',
      },
      {
        id: 5,
        title: 'Display Marketing',
        description:
          'Our display marketing solutions utilize visually appealing ads to capture the attention of your audience across various online platforms. We focus on retargeting and audience segmentation to deliver personalized messages that convert.',
      },
      {
        id: 6,
        title: 'Email Marketing',
        description:
          'Nurture customer relationships and drive conversions with our effective email marketing campaigns. We create engaging content, optimize send times, and track performance to deliver meaningful interactions and results.',
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
                src={require('../assets/img/digitalmarketing3.png')}
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
                    Elevate Your Digital Marketing Game
                    <i class='fas fa-mobile-android-alt    '></i>
                  </h2>
                </div>
                <div className='sub-title'>
                  <h3 data-aos='fade-down' data-aos-delay='50'>
                    Bringing Your SEO To New Heights
                  </h3>
                </div>
                <p data-aos='fade-up' data-aos-delay='50'>
                  At Graipfrüt, we specialize in supercharging your digital
                  marketing strategies, propelling your brand to new heights in
                  the online landscape. Elevate your SEO, enhance your digital
                  presence, and generate impactful results by partnering with
                  us. Together, we'll drive your business to the forefront of
                  the digital marketing arena, leveraging advanced tools like
                  Google Analytics to refine your strategy and ensure maximum
                  ROI.
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
      <OurApproach2 />
      <Whychooseus
        commonWhyChoose={whyChooseUsServices}
        whyChooseClass={'web'}
      />
    </>
  );
};

export default WebDevelopment;
