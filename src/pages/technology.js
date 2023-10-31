import React, { useEffect, useState } from "react"
import Pagetitle from "../components/Pagetitle"
import { Link } from "react-router-dom"
// import SVGIMG from "../assets/img/technology/tools.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Technology = ()=> {
    const [pageTile, ] = useState({
        mainTitle : 'Technology',
        pageClass : 'technology',
        subTitle : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        bgImg : "../assets/img/bg-main-title/about-bg.jpg" 
})

useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
    return (
        <>
            <Pagetitle pageTile={pageTile} />
            <section className="section lm-services bg pt-100 pb-50">
                <div className="container wd-container">
                    <div className="sec-title text-center" data-aos="fade-down" data-aos-delay="50">
                    <h2>Techstacks that We do</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="container wd-container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="mainImg firstImg">
                                {/* <img src={require('../assets/img/technology/technology-child-1.jpg')} data-aos="fade-left" data-aos-delay="300" className="img-fluid" alt="" /> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mainImg secondImg">
                                {/* <img src={require('../assets/img/technology/technology-child.jpg')} data-aos="fade-left" data-aos-delay="300" className="img-fluid" alt="" /> */}
                            </div> 
                        </div>
                    </div>
                </div>
                </section>

                <section className="section lm-services bg pt-50 pb-50">
                    <div className="container wd-container">
                        <div className="row web-development">
                            <div className="d-flex align-items-center col-md-6 mb-5 order-md-1">
                                <div className="ctn-box">
                                    <div className="sec-title text-center text-md-left" data-aos="fade-down" data-aos-delay="50">
                                    <h2 className="mb-0">Frontend Development.</h2>
                                    </div>
                                    <p className=" text-center text-md-left" data-aos="fade-right" data-aos-delay="50">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center col-md-6 mb-5 order-md-2">
                                <div className="technology-tools d-flex justify-content-center flex-wrap">
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/frontend/pwa.png')} alt="html" />
                                        <div className="technology-name">PWA</div>
                                    </Link>
                                    
                                    
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/frontend/angular.png')} alt="html" />
                                        <div className="technology-name">Angular</div>
                                    </Link>
                                    
                                    
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/frontend/reactjs.png')} alt="html" />
                                        <div className="technology-name">React</div>
                                    </Link>
                                    
                                    
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/frontend/vue.png')} alt="html" />
                                        <div className="technology-name">Vue</div>
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className="d-flex align-items-center col-md-6 mb-5 order-md-4">
                                <div className="ctn-box mt-5 mt-md-0">
                                    <div className="sec-title text-center text-md-right" data-aos="fade-down" data-aos-delay="50">
                                        <h2>Backend Development.</h2>
                                    </div>
                                    <div className="content-box text-center text-md-right" data-aos="fade-right" data-aos-delay="50">
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-center col-md-6 mb-5 order-md-3">
                                <div className="technology-tools d-flex justify-content-center flex-wrap">
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/backend/php.png')} alt="html" />
                                        <div className="technology-name">PHP</div>
                                    </Link>
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/backend/node.webp')} alt="html" />
                                        <div className="technology-name">Node</div>
                                    </Link>
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/backend/laravel.png')} alt="html" />
                                        <div className="technology-name">Laravel</div>
                                    </Link>
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/backend/python.png')} alt="html" />
                                        <div className="technology-name">Python</div>
                                    </Link>
                                </div>
                            </div>

                            <div className="d-flex align-items-center col-md-6 mb-5 order-md-5">
                                <div className="ctn-box mt-5">
                                    <div className="sec-title text-center text-md-left" data-aos="fade-down" data-aos-delay="50">
                                    <h2>Mobile Apps Development.</h2>
                                    </div>
                                    <p className=" text-center text-md-left" data-aos="fade-right" data-aos-delay="50">
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center col-md-6 mb-5 order-md-6">
                                <div className="technology-tools d-flex justify-content-center flex-wrap">
                                    <Link to="/android-app-development" className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/mobile/android-icon.png')} alt="html" />
                                        <div className="technology-name">Android</div>
                                    </Link>
                                        
                                        
                                    <Link to="/ios-app-development" className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/mobile/apple-icon.png')} alt="html" />
                                        <div className="technology-name">iOS</div>
                                    </Link>
                                        
                                        
                                    <Link className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/mobile/ionic-icon.png')} alt="html" />
                                        <div className="technology-name">Ionic</div>
                                    </Link>
                                        
                                        
                                    <Link to="/flutter-app-development" className="technology-item" data-aos="fade-up" data-aos-duration="1000">
                                        <img src={require('../assets/img/technology/mobile/flutter-icon.png')} alt="html" />
                                        <div className="technology-name">Flutter</div>
                                    </Link>
                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                    </section>
        </>
    )
}
export default Technology