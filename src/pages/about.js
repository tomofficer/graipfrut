import React, { useEffect, useState } from "react"
import Pagetitle from "../components/Pagetitle"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
const About = ()=>{
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        AOS.init({
          duration: 900,
          once: true,
        });
      }, []);
    const [pageTile, ] = useState({
            mainTitle : 'About Us',
            pageClass : 'about-us',
            subTitle : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            bgImg : "../assets/img/bg-main-title/about-bg.jpg" 
    })

    const [services, ] = useState([
        {
            "id": 1,
            "title": "Contrary to popular belief",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
            "id": 2,
            "title": "Contrary to popular belief",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
            "id": 3,
            "title": "Contrary to popular belief",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
            "id": 4,
            "title": "Contrary to popular belief",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
            "id": 5,
            "title": "Contrary to popular belief",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            },
            {
            "id": 6,
            "title": "Contrary to popular belief",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            }
      ])

    const [windowTop, setWindowTop] = useState(0)
    useEffect(() => {
        window.addEventListener("scroll", function () {
            setWindowTop(window.top.scrollY)
        });
      },[])

    return (
        <>
        <Pagetitle pageTile={pageTile} />
        <section className="our-mission section pt-100 pb-100" style={{overflow:"hidden"}}>
            <div className="container-fluid wd-container">
                <div className="row flex-md-row-reverse">
                <div className="col-lg-6 col-md-6 col-12 position-relative">
                    <img data-aos="fade-down" data-aos-delay="50" src={require('../assets/img/about/our-mision-2.jpg')} className="img-fluid" alt="" />
                    <div className="bgImg" style={{transform: 'translate3d(0px, '+(-80+windowTop/5) +'px , 0px)'}}></div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center">
                    <div className="ctn-box">
                    <div className="sec-title line-left">
                        <h2 data-aos="fade-down" data-aos-delay="50">Lorem Ipsum.</h2>
                    </div>
                    <div className="sub-title">
                        <h3 data-aos="fade-down" data-aos-delay="50">Lorem Ipsum is simply</h3>
                    </div>
                    <p data-aos="fade-up" data-aos-delay="50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="section lm-services bg pt-100 pb-100">
                <div className="container wd-container">
                    <div className="sec-title text-center">
                    <h2 data-aos="fade-down" data-aos-delay="50">What We Do.</h2>
                    <p data-aos="fade-up" data-aos-delay="50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    {
                        services.map((service)=> (
                            <div className="row about_services" key={service.id}>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="srvs-single-box stl-one">
                                        <div className="ctn-box text-left">
                                        <h2 data-aos="fade-down" data-aos-delay="50">{service.id}. { service.title }</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6 col-12">
                                    <div className="srvs-single-box stl-one">
                                        <div className="ctn-box text-left">
                                        <p data-aos="fade-down" data-aos-delay="50">{ service.description }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                <div className="row">
                    <div className="col-12 text-center">
                    <Link to="/contact-us" className="btn cta-black" data-aos="fade-down" data-aos-delay="50">Start a Project</Link>
                    </div>
                </div>
                </div>
                </section>
                <section className="get-started section">
                    <div className="container d-flex align-items-center justify-content-center">
                        <div className="box-container">
                            <div className="sec-title wt text-center">
                            <h2 data-aos="fade-down" data-aos-delay="50">Get Started</h2>
                            <p data-aos="fade-up" data-aos-delay="50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <Link to="/contact-us" data-aos="fade-down" data-aos-delay="50" className="btn cta-black-outline">Let’s Get Started</Link>
                            </div>
                        </div>
                    </div>
                    </section>
        </>
    )
}
export default About