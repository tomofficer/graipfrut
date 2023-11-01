import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurApproach = () => {
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
                  Discovery
                </div>
                <div
                  className='approach-des'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  In the 'Discovery' phase, we dive deep into understanding your
                  objectives, target audience, and project requirements. This
                  sets the foundation for a tailored strategy, ensuring that
                  every aspect of your digital project aligns seamlessly with
                  your goals.
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
                  Design
                </div>
                <div
                  className='approach-des'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  In the 'Design' phase, we'll meticulously design and prototype
                  your project, encompassing system architecture, wireframing,
                  UI/UX design, and a comprehensive technical blueprint ensuring
                  your website exceeds expectactions.
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
                  Development
                </div>
                <div
                  className='approach-des'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  In the ‘Development’ phase, our expert development team brings
                  your project to life utilizing the latest technologies that
                  best suit your needs. We establish and maintain a clear
                  project scope, ensuring consistency to deliver work of high
                  quality and within deadlines.
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
                  Delivery
                </div>
                <div
                  className='approach-des'
                  data-aos='fade-up'
                  data-aos-duration='1000'>
                  In the 'Delivery' phase, our commitment to your project
                  doesn't end at launch. We provide continuous support,
                  monitoring, and updates to ensure your digital solution
                  remains secure, up-to-date, and optimized for long-term
                  success.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default OurApproach;
