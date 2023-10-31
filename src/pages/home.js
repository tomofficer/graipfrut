import React, { useEffect, useState } from "react";
import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HomeMainTitle } from "../components/homeMainTitle";
const Home = (data) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        AOS.init({
          duration: 900,
          once: true,
        });
      }, []);
    const [homeServices, ] = useState([
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
      const [HomeOurServices, ] = useState([
        {
          "id": 7,
          "title": "Contrary to popular belief",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
          "id": 8,
          "title": "Contrary to popular belief",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
          "id": 9,
          "title": "Contrary to popular belief",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
      ])

      const [mainTitle, ] = useState({
        "title": "Modern Web Experts",
        "paragraph": "Graipfrüt is your partner in digital innovation, leveraging the power of AI and expertise in modern web development to craft unique, impactful experiences that propel your brand to new digital heights."
      })

      useEffect(() => {
        const passion_parallax = document.getElementById("passion_parallax");
        window.addEventListener("scroll", function () {
          let offset = window.pageYOffset;
          if(passion_parallax !== null) {
    
            passion_parallax.style.backgroundPositionY = offset * 0.7 + "px";
          }
        });
      },[])

    return (
        <div className="home">
            <HomeMainTitle data={mainTitle} />
            <section className="section lm-services pt-100 pb-100">
                <div className="container wd-container">
                    <div className="sec-title text-center">
                        <h2 data-aos="fade-left" data-aos-delay="50">About Grapfrut</h2>
                        <div className="sub-text" data-aos="fade-right" data-aos-delay="200">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    {
                        homeServices.map((service, index)=> (
                            <div className="row home_services" key={service.id}>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="srvs-single-box stl-one">
                                        <div className="ctn-box text-left">
                                        <h2 data-aos="fade-down" data-aos-delay="50">{index+1}. { service.title }</h2>
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
                </div>
            </section>

            <section className="lm-passion section d-flex align-items-center" id="passion_parallax">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2 data-aos="fade-right" data-aos-delay="50">Lorem Ipsum has been</h2>
                        <p data-aos="fade-left" data-aos-delay="50"><small>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</small></p>
                    </div>
                </div>
            </section>

            <section className="section lm-home-services pt-100 pb-100">
                <div className="container wd-container">
                    <div className="sec-title text-center">
                    <h2 data-aos="fade-down" data-aos-delay="50">Our Services.</h2>
                    <div className="sub-text max-800 mx-auto">
                    <p data-aos="fade-up" data-aos-delay="50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br /> It was popularised in the 1960s with the release of Letraset sheets.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-5" data-aos="fade-down" data-aos-delay="50">
                        <img src={require('../assets/img/lm-home-services.jpg')} className="img-fluid" style={{width:"100%"}} alt="" />
                    </div>
                </div>
                {
                        HomeOurServices.map((service, index)=> (
                            <div className="row home_services" key={service.id}>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="srvs-single-box stl-one">
                                        <div className="ctn-box text-left">
                                        <h2 data-aos="fade-up" data-aos-delay="50">{index+1}. { service.title }</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6 col-12">
                                    <div className="srvs-single-box stl-one">
                                        <div className="ctn-box text-left">
                                        <p data-aos="fade-up" data-aos-delay="50">{ service.description }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </section>

                <section className="lm-hm-talk">
                    <div className="container text-center">
                        <h3 className="h2 pt-3">Hire <Typed
                    strings={['Vue Js Developer', 'React Js Developer', 'Angular Js Developer']}
                    typeSpeed={40} backSpeed={20} loop
                /></h3>
                    </div>
                    </section>
        </div>
    );
}

export default Home