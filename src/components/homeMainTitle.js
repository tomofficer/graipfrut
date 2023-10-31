import React, { useEffect } from "react";
import {
  Link
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const HomeMainTitle = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  useEffect(() => {
    const parallax = document.getElementById("parallax");

    // Parallax Effect for DIV 1
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      if(parallax !== null) {

        parallax.style.backgroundPositionY = offset * 0.7 + "px";
      }
    });
  },[])
  return (

<div className="main-banner">
     <div className="item">
         <div id="parallax" className="slide d-flex justify-content-center align-items-center home-bg-img">
             <div className="bg-shade"></div>
             <div className="info text-center">
                 <h1 data-aos="fade-up" data-aos-delay="50">{props.data ? props.data.title : "Loading"}</h1>
                 <p className="mr-auto ml-auto" data-aos="fade-down" data-aos-delay="50">{props.data ? props.data.paragraph : "Loading"}</p>
                 <div className="cta-btn-wrap flex-box d-flex align-items-center justify-content-center">
                     <Link to="/" className="btn cta-black-outline" data-aos="fade-left" data-aos-delay="50"><span>Go to</span></Link>
                     <Link to="/contact-us" className="btn cta-black-outline" data-aos="fade-right" data-aos-delay="50"><span>Contact Us</span></Link>
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
