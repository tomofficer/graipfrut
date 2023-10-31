import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo/grapfrut.svg';

import logoAlt from '../assets/logo/graipfrut-logo-navigation-alt-white.png';
import { ReactComponent as Twitter } from '../assets/social/tw.svg';
import { ReactComponent as Linkedin } from '../assets/social/in.svg';
import { ReactComponent as Instagram } from '../assets/social/ins.svg';
import { ReactComponent as Facebook } from '../assets/social/fb.svg';
import Icon from './Icon';
const Navigation = () => {
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(null);
  const [activeTab, setActiveTab] = useState('');
  const [activeSubTab, setActiveSubTab] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleColor = () => {
    var app = document.getElementsByTagName('html')[0];
    if (localStorage.lightMode === 'dark') {
      localStorage.lightMode = 'light';
      app.setAttribute('data-theme', 'light');
    } else {
      localStorage.lightMode = 'dark';
      app.setAttribute('data-theme', 'dark');
    }
  };

  const toggleMenu = () => {
    setShow(!show);
  };

  const showMenu = (value) => {
    if (value === activeTab) {
      setActiveTab('');
    } else {
      setActiveTab(value);
    }
  };
  const showSubMenu = (value) => {
    if (value === activeSubTab) {
      setActiveSubTab('');
    } else {
      setActiveSubTab(value);
    }
  };

  return (
    <header className={`header ${scrollPosition > 5 ? 'fixed' : ''}`}>
      <div
        onClick={() => toggleMenu()}
        className={`side-menu-overlay ${show ? 'sideOverlay' : ''}`}></div>
      <div className='container wd-container'>
        <div className='header-wrap d-flex flex-wrap align-items-center'>
          <div className='head-left'>
            {/* UPDATE GRAIPFRUT LOGO HERE */}
            <div className='logo'>
              <Link to='/'>
                {/* <Logo /> */}
                <img src={logoAlt} alt='' style={{ maxWidth: '150px' }} />
              </Link>
            </div>
          </div>
          <div className='head-right d-flex flex-wrap align-items-center'>
            <ul className='social'>
              <li>
                <Link to=''>
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link to=''>
                  <Linkedin />
                </Link>
              </li>
              <li>
                <Link to=''>
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link to=''>
                  <Facebook />
                </Link>
              </li>
            </ul>

            <div className='btn-dark-light'>
              <Link to='' onClick={() => toggleColor()}>
                <Icon name='dark-light-icon' data={{ width: 25, height: 25 }} />
              </Link>
            </div>

            <Link
              to=''
              onClick={() => toggleMenu()}
              className='d-flex align-items-center toggle toggleOpen'>
              <span className='icon'></span>
            </Link>
          </div>
          <div className={`head-center ${show ? 'show' : ''}`}>
            <div className='menu-container'>
              <Link
                to=''
                onClick={() => toggleMenu()}
                className='d-flex align-items-center toggle toggleClose'>
                <span className='icon'></span>
              </Link>
              <ul className='menu'>
                <li onClick={() => toggleMenu()}>
                  <Link to='/'>Home</Link>
                </li>
                <li onClick={() => toggleMenu()}>
                  <Link to='/about'>About</Link>
                </li>
                <li onClick={() => toggleMenu()}>
                  <Link to='/technology'>Technology</Link>
                </li>
                <li>
                  <Link to=''>
                    <span onClick={() => showMenu('services')}>Services</span>
                  </Link>
                  <div
                    className={`menu-arrow ${
                      activeTab === 'services' ? 'open' : ''
                    }`}
                    onClick={() => showMenu('services')}>
                    <Icon
                      name='down-arrow-icon'
                      data={{ width: 25, height: 25 }}
                    />
                  </div>
                  <ul
                    className={`sub-menu ${
                      activeTab === 'services' ? 'showMega' : ''
                    }`}>
                    <li onClick={() => toggleMenu()}>
                      <Link to='/web-development'>Web Development</Link>
                    </li>
                    <li>
                      <Link to=''>
                        <span onClick={() => showSubMenu('app')}>
                          App Development
                        </span>
                      </Link>
                      <div
                        className={`menu-arrow ${
                          activeSubTab === 'app' ? 'open' : ''
                        }`}
                        onClick={() => showSubMenu('app')}>
                        <Icon
                          name='down-arrow-icon'
                          data={{ width: 25, height: 25 }}
                        />
                      </div>
                      <ul
                        className={`sub-menu ${
                          activeSubTab === 'app' ? 'showMega' : ''
                        }`}>
                        <li onClick={() => toggleMenu()}>
                          <Link to='/android'>Android</Link>
                        </li>
                        <li onClick={() => toggleMenu()}>
                          <Link to='/ios'>
                            <span className='text-lowercase'>i</span>OS
                          </Link>
                        </li>
                        <li onClick={() => toggleMenu()}>
                          <Link to='/flutter'>Flutter</Link>
                        </li>
                      </ul>
                    </li>
                    <li onClick={() => toggleMenu()}>
                      <Link to='/digital-marketing'>Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to=''>
                        <span onClick={() => showSubMenu('commerce')}>
                          E-commerce
                        </span>
                      </Link>
                      <div
                        className={`menu-arrow ${
                          activeSubTab === 'commerce' ? 'open' : ''
                        }`}
                        onClick={() => showSubMenu('commerce')}>
                        <Icon
                          name='down-arrow-icon'
                          data={{ width: 25, height: 25 }}
                        />
                      </div>
                      <ul
                        className={`sub-menu ${
                          activeSubTab === 'commerce' ? 'showMega' : ''
                        }`}>
                        <li onClick={() => toggleMenu()}>
                          <Link to='/magento'>Magento</Link>
                        </li>
                        <li onClick={() => toggleMenu()}>
                          <Link to='/wordpress'>Wordpress</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li onClick={() => toggleMenu()}>
                  {/* <Link to="/contact-us">Contact Us</Link> */}
                  <Link to='/'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
