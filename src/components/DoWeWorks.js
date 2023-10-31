import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
const DoWeWorks = (commonServices) => {
    useEffect(() => {
        AOS.init({
          duration: 900,
          once: true,
        });
      }, []);
    return (
        <section className="section we-works pt-50 pb-50">
            <div className="container wd-container">
            <div className="row">
                <div className="col-md-6">
                <div className="first-item">
                    <div className="subtitle-text-work mb-3" data-aos="fade-up" data-aos-duration="1000">{ commonServices.commonServices.sectionTitle }</div>
                </div>
                </div>
                <div className="col-md-6">
                <ul className="second-item">
                    {
                        commonServices.commonServices.data.map((service)=>(
                            <li className="second-item-content mb-3" data-aos="fade-up" data-aos-duration="1000" key={service.id}>
                            <div className="d-flex align-items-center mb-3">
                                <div className="second-item-title mb-md-3">{ service.title }</div>
                            </div>
                            <div className="second-item-dec">{ service.description }</div>
                            </li>
                        ))
                    }
                </ul>
                </div>
            </div>
            </div>
        </section>
    )
}

export default DoWeWorks