import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Pagetitle = (pageTile)=> {
    useEffect(() => {
        AOS.init({
          duration: 900,
          once: true,
        });
      }, []);

    return (
        <>
            <div id="pagetitle" className="page-info">
                {/* <div className="page-bg">
                    <div className={`bg ${pageTile.pageTile.pageClass}`}></div>
                </div> */}
                <div className="info d-flex flex-column align-items-center justify-content-center text-center">
                    <h1 data-aos="fade-up" data-aos-delay="50" dangerouslySetInnerHTML={{ __html: pageTile.pageTile.mainTitle }}>
                        
                    </h1>
                    <div className="sub-text max-800" data-aos="fade-up" data-aos-delay="300">
                        <p> {pageTile.pageTile.subTitle}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pagetitle