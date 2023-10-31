import React, { useEffect, useState } from "react"
import Pagetitle from "../components/Pagetitle"
import TextTitle from "../components/TextTitle"
import DoWeWorks from "../components/DoWeWorks"
import OurApproach from "../components/OurApproach"
import Whychooseus from "../components/Whychooseus"
import WhyChooseUsImg from "../assets/img/technology/technology-child-1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
const WebDevelopment = ()=> {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
    const [pageTile, ] = useState({
        mainTitle : '<span class="text-lowercase">i<span>OS',
        pageClass : 'ios',
        subTitle : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    })

    const [textTitle, ] = useState({
        sectionTitle:'<span class="text-lowercase">i<span>OS',
        sectionDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        subTitle:'We excel at digital-marketing',
        subDescription:"<p>Our services help your business online!<br> It doesn't matter that who you are as a designer or developer at Luvimac; everyone works with the same goal in mind: to deliver a salient, eye-catching website that exceeds all expectations of our customers.</p>",
        img:'../../img/web-development/web-development.jpg',
      })
      const [services, ] = useState(
        {
            sectionTitle:"Create A Professional App",
            data:[
              {
                "id": 1,
                "title": "Lorem Ipsum is simply",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              },
              {
                "id": 2,
                "title": "Lorem Ipsum is simply",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              },
              {
                "id": 3,
                "title": "Lorem Ipsum is simply",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              },
              {
                "id": 4,
                "title": "Lorem Ipsum is simply",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              },
              {
                "id": 5,
                "title": "Lorem Ipsum is simply",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              },
              {
                "id": 6,
                "title": "Lorem Ipsum is simply",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
          ]
          }
      )

      const [whyChooseUsServices,] = useState(
        {
          sectionTitle:"Why Choose Us",
          leftImg: WhyChooseUsImg,
          data:[
          {
            "id": 1,
            "title": "Lorem Ipsum is simply",
            "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>"
            },
            {
            "id": 2,
            "title": "Lorem Ipsum is simply",
            "description": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>"
            }
        ]
        }
      )
    return (
        <>
        <Pagetitle pageTile={pageTile} />
        <TextTitle textTitleServices={textTitle} />
        <DoWeWorks commonServices={services} />
        <section className="lm-passion section d-flex align-items-center">
            <div className="container">
                <div className="sec-title text-center">
                    <h2 data-aos="fade-down" data-aos-delay="50">Lorem Ipsum is simply</h2>
                    <p data-aos="fade-up" data-aos-delay="50"><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small></p>
                </div>
            </div>
        </section>
        <OurApproach />
        <Whychooseus commonWhyChoose={whyChooseUsServices} whyChooseClass={'web'} />
        </>
    )
}

export default WebDevelopment