import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const BottomHero = () => {
  //button style change handle
  const [isHovered2, setIsHovered2] = useState(false);

  const divStyle2 = {
    backgroundColor: isHovered2 ? '#5ea1b2' : 'white',
    color: isHovered2 ? 'white' : 'black',
    border: 'none',
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  return (
    <>
      <section className='lm-hm-talk'>
        <div className='container text-center'>
          <h3 className='h2 pt-3'>
            We've got you covered:
            <br />{' '}
            <Typed
              strings={[
                'Web Development',
                'Mobile App Development',
                'E-Commerce Development',
                'Frontend Development',
                'Backend Development',
                'UI/UX Design',
                'SEO & Digital Marketing',
              ]}
              typeSpeed={40}
              backSpeed={20}
              loop
              style={{ color: '#5ea1b2' }}
            />
          </h3>
        </div>
      </section>

      <section className='get-started section'>
        <div className='container d-flex align-items-center justify-content-center'>
          <div className='box-container'>
            <div className='sec-title wt text-center'>
              <h2 data-aos='fade-down' data-aos-delay='50'>
                Have Questions?
              </h2>
              <p data-aos='fade-up' data-aos-delay='50'>
                If you're curious about how we can help or have any questions
                about our services, don't hesitate to contact us. We're
                committed to delivering the information and support you need.
              </p>
              <Link
                to='/contact-us'
                data-aos='fade-down'
                data-aos-delay='50'
                className='btn cta-black-outline'
                style={divStyle2}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomHero;
