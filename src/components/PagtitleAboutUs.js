import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PagetitleAboutUs = (pageTile) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <>
      <div id='pagetitle' className='page-info'>
        <div className='page-bg'>
          <div className={`bg ${pageTile.pageTile.pageClass}`}></div>
        </div>

        {/* <img
          src={require('../assets/img/home/graipfrutBg.jpg')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1,
          }}
        /> */}

        <img
          src={require('../assets/img/home/graipfrut-logo-white.png')}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centers the image
            zIndex: 2,
            maxWidth: '300px',
          }}
        />

        {/* <div className='info d-flex flex-column align-items-center justify-content-center text-center'>
          <h1
            data-aos='fade-up'
            data-aos-delay='50'
            dangerouslySetInnerHTML={{
              __html: pageTile.pageTile.mainTitle,
            }}></h1>
          <div
            className='sub-text max-800'
            data-aos='fade-up'
            data-aos-delay='300'>
            <p> {pageTile.pageTile.subTitle}</p>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default PagetitleAboutUs;
