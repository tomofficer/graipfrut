import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import graipfrutLogo from '../assets/img/home/graipfrut-logo-yellow.png';

export const HomeMainTitle = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  useEffect(() => {
    const parallax = document.getElementById('parallax');

    // Parallax Effect for DIV 1
    window.addEventListener('scroll', function () {
      let offset = window.pageYOffset;
      if (parallax !== null) {
        parallax.style.backgroundPositionY = offset * 0.7 + 'px';
      }
    });
  }, []);

  //media query for dynamic logo conditional on screen size
  function useMediaQuery(queries) {
    const [matches, setMatches] = useState(
      queries.map((q) => window.matchMedia(q).matches)
    );

    useEffect(() => {
      const mediaQueryLists = queries.map((q) => window.matchMedia(q));

      const listeners = mediaQueryLists.map((mql, index) => {
        return () =>
          setMatches((prev) => {
            // Copy the previous state
            const newState = [...prev];
            // Update only the index that has changed
            newState[index] = mql.matches;
            return newState;
          });
      });

      // Add listeners for each query
      mediaQueryLists.forEach((mql, index) =>
        mql.addListener(listeners[index])
      );

      return () => {
        // Cleanup listeners on component unmount
        mediaQueryLists.forEach((mql, index) =>
          mql.removeListener(listeners[index])
        );
      };
    }, [queries]);

    return matches;
  }

  //params for media query
  const [isLargeScreen, isMediumScreen] = useMediaQuery([
    '(min-width: 800px)',
    '(min-width: 500px)',
  ]);

  return (
    <div className='main-banner'>
      <div className='item'>
        <div
          id='parallax'
          className='slide d-flex justify-content-center align-items-center home-bg-img'>
          <div className='bg-shade'></div>
          <div className='info text-center'>
            {isLargeScreen ? (
              <img
                src={graipfrutLogo}
                alt='graipfrut-logo'
                style={{ maxWidth: '400px' }}
              />
            ) : (
              <img
                src={graipfrutLogo}
                alt='graipfrut-logo'
                style={{ maxWidth: '200px' }}
              />
            )}

            <h1
              data-aos='fade-up'
              data-aos-delay='50'
              // style={{
              //   color: '#FFDC4D',
              // }}
            >
              {props.data ? props.data.title : 'Loading'}
            </h1>
            <p
              className='mr-auto ml-auto'
              data-aos='fade-down'
              data-aos-delay='50'>
              {props.data ? props.data.paragraph : 'Loading'}
            </p>
            <div className='cta-btn-wrap flex-box d-flex align-items-center justify-content-center'>
              <Link
                to='/web-development'
                className='btn cta-black-outline'
                data-aos='fade-left'
                data-aos-delay='50'>
                <span>Our Services</span>
              </Link>
              <Link
                to='/contact-us'
                className='btn cta-black-outline'
                data-aos='fade-right'
                data-aos-delay='50'>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <header id="header">
    //   <div id="parallax" className="intro">
    //     <div className="overlay">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-12 intro-text">
    //             <h1>
    //               {props.data ? props.data.title : "Loading"}
    //               <span></span>
    //             </h1>
    //             <p>{props.data ? props.data.paragraph : "Loading"}</p>
    //             <a
    //               href="#"
    //               className="btn btn-custom btn-lg page-scroll"
    //             >
    //               Contact Us
    //             </a>{" "}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};
