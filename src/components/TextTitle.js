import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
const TextTitle = (textTitleServices) => {
    useEffect(() => {
        AOS.init({
          duration: 900,
          once: true,
        });
      }, []);
    return (
        <section className="section lm-services bg pt-100 pb-50">
            <div className="container wd-container">
                <div className="sec-title text-center" data-aos="fade-down" data-aos-delay="50">
                    <h2 dangerouslySetInnerHTML={{ __html: textTitleServices.textTitleServices.sectionTitle }}></h2>
                    <div className="sub-text mx-auto max-800">
                        <p>{ textTitleServices.textTitleServices.sectionDescription }</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextTitle