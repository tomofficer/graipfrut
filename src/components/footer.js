import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as FooterLogo } from '../assets/logo/footer-logo.svg'
import { ReactComponent as Location } from '../assets/img/footer/location.svg';
import { ReactComponent as Contact } from '../assets/img/footer/contect.svg';
import { ReactComponent as NewsLater } from '../assets/img/footer/newsLater.svg';
const Footer = () => {
  return (
    <footer
      id='footer'
      className='dark text-center footer-1'
      style={{ paddingBottom: '20px' }}>
      <div id='contact' style={{ paddingBottom: '20px', paddingTop: '50px' }}>
        <div className='container-fluid'>
          <div className='row' style={{ justifyContent: 'center' }}>
            <div className='col-md-4'>
              <div className='text-center'>
                <div
                  className='icon wow fadeIn'
                  style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                  <Location />
                </div>
                <div className='title text-uppercase'>
                  <h4 className='light-txt footer_title'>location</h4>
                </div>
                <div className='desc light-txt' style={{ textAlign: 'center' }}>
                  Graipfrut Web Development
                  <br />
                  Hartford, CT 06101
                  <br />
                  USA
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='text-center'>
                <div
                  className='icon wow fadeIn'
                  style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                  <Contact />
                </div>
                <div className='title text-uppercase'>
                  <h4 className='light-txt footer_title'>Contact details</h4>
                </div>
                <div className='desc light-txt' style={{ textAlign: 'center' }}>
                  <Link to='' style={{ color: '#ffffff' }}>
                    graipfrut.com@gmail.com
                    <br />
                    (530) 925-9482
                  </Link>
                </div>
                <div
                  className='desc light-txt'
                  style={{ textAlign: 'center', marginTop: '10px' }}>
                  <Link to='#'>
                    <img
                      src={require('../assets/img/footer/twitter.png')}
                      alt='twitter'
                      style={{ width: '30px', margin: '5px' }}
                    />{' '}
                  </Link>
                  <Link to='#'>
                    <img
                      src={require('../assets/img/footer/linkedin.png')}
                      alt='linkedin'
                      style={{ width: '30px', margin: '5px' }}
                    />{' '}
                  </Link>
                  <Link to='#'>
                    <img
                      src={require('../assets/img/footer/instagram.png')}
                      alt='instagram'
                      style={{ width: '30px', margin: '5px' }}
                    />{' '}
                  </Link>
                  <Link to='#'>
                    <img
                      src={require('../assets/img/footer/facebook.png')}
                      alt='facebook'
                      style={{ width: '30px', margin: '5px' }}
                    />{' '}
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4' style={{ textAlign: 'center' }}>
              <div className='text-center'>
                <div
                  className='icon wow fadeIn'
                  style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                  <NewsLater />
                </div>
                <div className='title text-uppercase'>
                  <h4 className='light-txt footer_title'>Company</h4>
                </div>
                <div className='desc light-txt'>
                  <div className='page_link'>
                    <ul>
                      <li>
                        <Link to='/about' className='light-txt'>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to='/web-development' className='light-txt'>
                          Our Services
                        </Link>
                      </li>
                      <li>
                        <Link to='/contact-us' className='light-txt'>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='footer-logo'>
          {/* <Link to="/">
                <FooterLogo style={{maxWidth: "375px", width: "100%", visibility: "visible", animationName: "fadeInUp"}} />
             </Link> */}
        </div>
        <div
          className='copyright wow fadeInUp'
          style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
          © Graipfrut {new Date().getFullYear()} <span>|</span>{' '}
          <Link to='#'>Privacy Policy </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
