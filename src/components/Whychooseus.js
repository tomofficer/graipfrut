import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import android2 from '../assets/img/android2.jpg';
const Whychooseus = (commonWhyChoose) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  return (
    <section className='section why-choose-us pt-50 pb-100'>
      <div className='container wd-container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='img-box' data-aos='fade-up' data-aos-delay='50'>
              <img
                style={{ maxWidth: '600px' }}
                src={commonWhyChoose.commonWhyChoose.leftImg}
                className='img-fluid'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='ctn-box p18'>
              <div className='sub-title'>
                <h2 data-aos='fade-down' data-aos-delay='50'>
                  {commonWhyChoose.commonWhyChoose.sectionTitle}
                </h2>
                <div
                  className='sub-text'
                  data-aos='fade-down'
                  data-aos-delay='50'
                  dangerouslySetInnerHTML={{
                    __html: commonWhyChoose.commonWhyChoose.shortPara,
                  }}></div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='srvs-single-box stl-two'>
                    <div className='ctn-box'>
                      <div
                        className='accordion accordionWcu'
                        id='accordionChooseUs'>
                        {commonWhyChoose.commonWhyChoose.data.map(
                          (service, index) => (
                            <div className='card' key={index}>
                              <div
                                className='card-header'
                                data-aos='fade-down'
                                data-aos-delay='50'
                                id={'heading-' + index}>
                                <h3
                                  data-toggle='collapse'
                                  data-target={'#collapse-' + index}
                                  aria-controls={'collapse-' + index}
                                  className='collapsed'>
                                  {service.title}{' '}
                                  <span className='icon-plus'>
                                    <span className='icon'></span>
                                  </span>
                                </h3>
                              </div>
                              <div
                                id={'collapse-' + index}
                                className='accordion-collapse collapse'
                                aria-labelledby={'heading-' + index}
                                data-parent='#accordionChooseUs'>
                                <div
                                  className='card-body'
                                  data-aos='fade-down'
                                  data-aos-delay='50'
                                  dangerouslySetInnerHTML={{
                                    __html: service.description,
                                  }}></div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
