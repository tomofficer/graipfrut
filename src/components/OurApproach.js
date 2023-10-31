import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurApproach = () => {
    useEffect(() => {
        AOS.init({
          duration: 900,
          once: true,
        });
      }, []);
    return (
        <section className="section ourapproach pt-50 pb-50">
            <div className="container wd-container">
                <div className="sec-title text-center">
                    <h2 data-aos="fade-up" data-aos-duration="1000">Our Approach</h2>
                </div>
                <div className="ul-list">
                    <ul className="row">
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className="opproach">
                        {/* <div className="opproach-count" data-aos="fade-up" data-aos-duration="1000">01</div> */}
                        <div className="approach-title" data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum</div>
                        <div className="approach-des" data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className="opproach">
                        {/* <div className="opproach-count" data-aos="fade-up" data-aos-duration="1000">02</div> */}
                        <div className="approach-title" data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum</div>
                        <div className="approach-des" data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className="opproach">
                        {/* <div className="opproach-count" data-aos="fade-up" data-aos-duration="1000">03</div> */}
                        <div className="approach-title" data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum</div>
                        <div className="approach-des" data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3">
                        <div className="opproach">
                        {/* <div className="opproach-count" data-aos="fade-up" data-aos-duration="1000">04</div> */}
                        <div className="approach-title" data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum</div>
                        <div className="approach-des" data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default OurApproach