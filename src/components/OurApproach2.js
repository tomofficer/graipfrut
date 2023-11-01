import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurApproach2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  return (
    <section className='section ourapproach pt-50 pb-50'>
      <div className='container wd-container'>
        <div className='sec-title text-center'>
          <h2 data-aos='fade-up' data-aos-duration='1000'>
            Our Process
          </h2>
        </div>
        <div className='ul-list'>
          <ul className='row'>
            <li className='col-12 col-md-6 col-lg-3'>
              <div className='opproach'>
                {/* <div className="opproach-count" data-aos="fade-up" data-aos-duration="1000">01</div> */}
                <div
                  className='approach-title'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  Strategy & Planning
                </div>
                <div
                  className='approach-des'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  In this phase, we work closely with you to understand your
                  business goals, target audience, and competition. We develop a
                  comprehensive digital strategy that outlines the tactics
                  needed to achieve your objectives.
                </div>
              </div>
            </li>
            <li className='col-12 col-md-6 col-lg-3'>
              <div className='opproach'>
                {/* <div className="opproach-count" data-aos="fade-up" data-aos-duration="1000">02</div> */}
                <div
                  className='approach-title'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  Content Optimization
                </div>
                <div
                  className='approach-des'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  Content is at the heart of successful SEO and digital
                  marketing campaigns. We focus on optimizing your existing
                  content and creating new, high-quality content that aligns
                  with search engine algorithms.
                </div>
              </div>
            </li>
            <li className='col-12 col-md-6 col-lg-3'>
              <div className='opproach'>
                {/* <div className="opproach-count" data-aos="fade-up" data-aos-duration="1000">03</div> */}
                <div
                  className='approach-title'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  Campaign Execution
                </div>
                <div
                  className='approach-des'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  Here we execute SEO strategies, paid advertising campaigns and
                  social media initiatives. We monitor campaign performance in
                  real-time and make data-driven adjustments to ensure optimal
                  results.
                </div>
              </div>
            </li>
            <li className='col-12 col-md-6 col-lg-3'>
              <div className='opproach'>
                {/* <div className="opproach-count" data-aos="fade-up" data-aos-duration="1000">04</div> */}
                <div
                  className='approach-title'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  Tracking & Reporting
                </div>
                <div
                  className='approach-des'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  In this stage we provide detailed reports on key performance
                  metrics, allowing you to track progress, understand ROI, and
                  make informed decisions to further optimize your online
                  presence.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default OurApproach2;
