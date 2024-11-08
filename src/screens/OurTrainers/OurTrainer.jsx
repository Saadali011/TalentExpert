import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import wave2 from '../../assets/WhatWeDo/wave2.png'
import WeD2 from '../../assets/WhatWeDo/WeD2.png'
import WeD3 from '../../assets/WhatWeDo/WeD3.png'

import left1 from '../../assets/join/left1.png';
import left2 from '../../assets/join/left2.png';
import left3 from '../../assets/join/left3.png';
import left4 from '../../assets/join/left4.png';
import left5 from '../../assets/join/left5.png';
import right1 from '../../assets/join/right1.png';
import right2 from '../../assets/join/right2.png';
import right3 from '../../assets/join/right3.png';
import right4 from '../../assets/join/right4.png';
import right5 from '../../assets/join/right5.png';
import wave3 from '../../assets/WhatWeDo/wave3.png'
import frame from '../../assets/WhatWeDo/frame.png'
import frame2 from '../../assets/WhatWeDo/frame2.png'
import frame7 from '../../assets/WhatWeDo/frame7.png'
import wave1 from '../../assets/WhatWeDo/wave1.png'


import InfoCard from "../../screens/InfoCard/InfoCard";
import { courseInfoCardData, infoCardData } from "../../constant";

import wave from '../../assets/WhatWeDo/wave.png'
import WeD1 from '../../assets/WhatWeDo/WeD1.png'
import WeD9 from '../../assets/WhatWeDo/WeD9.png'

import bell from '../../assets/WhatWeDo/bell.svg'

export default function OurTrainer() {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { TrainerContainer,fontpaddingleft } = style;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className="container-sm-fluid pt-5 pb-4  m-sm-0 bg-sm-none "

    >
      <div className="container-sm-fluid "
        style={{
          // backgroundColor: '#5A8C75',
          backgroundImage: `url(${frame2})`,
          // backgroundSize: 'cover',
          // backgroundPosition: "top center",
          backgroundSize: 'contain',
          backgroundPosition: "bottom",
          backgroundRepeat: 'no-repeat',
          padding: 0,
        }}>
        <InfoCard data={infoCardData} count={false} gradient={false} />

      </div>


      {/* First Row */}
      <div className="container-fluid mt-sm-5 pl-4  p-sm-0  "
        style={{
          // backgroundColor: '#5A8C75',
          backgroundImage: `url(${frame7})`,
          backgroundSize: 'contain',
          backgroundPosition: "center top",
          // backgroundSize: 'cover',
          // backgroundPosition: "top right",
          backgroundRepeat: 'no-repeat',
          padding: 0,
        }}
      >
        <div className="row align-items-center pb-sm-5 pr-sm-5 ">
          <div className="col-lg-6  p-0 pl-sm-4 col-md-6 col-sm-12 pr-4">
            <img src={WeD9} alt="" className="img-container w-100 pr-sm-3  " />
          </div>
          {/* <div className="col-1"></div> */}
          <div className="pl-sm-5 col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-sm-center text-lg-left  ">
            <h1 style={{ fontWeight: 400, fontSize: "3.4rem"  ,fontFamily: "Barlow,sans-serif"}} className='pl-sm-2 mt-2'>  <span style={{ color: '#160A54' }}>Find your   </span><span style={{ color: '#04642D' }}> next hire</span></h1>
            <div className="d-sm-block d-none" style={{ height: 80 }}></div>

            <div className="row mt-3 font21 align-items-center pl-sm-2">
              <div className="col-1"><i className="fa-regular fa-circle-check mr-4  pl-sm-2" style={{ fontWeight: '200 !important', fontSize: 40, color: '#3DCA89' }}></i></div>
              <div className="col-11"><p style={{ fontWeight: 400, color: '#3F3F3F'   ,fontFamily: "Barlow,sans-serif"}} className="font19x pl-4 fontpaddingleft"> Access a curated pool of qualified, vetted candidates</p></div>
            </div>
            <div className="row mt-3 font20 align-items-center pl-sm-2">
              <div className="col-1"><i className="fa-regular fa-circle-check mr-5 pr-5  pl-sm-2" style={{ fontWeight: '200 !important', fontSize: 40, color: '#3DCA89' }}></i></div>
              <div className="col-11"><p style={{ fontWeight: 400, color: '#3F3F3F'   ,fontFamily: "Barlow,sans-serif"}} className="font19x pl-4 fontpaddingleft"> Share your job requirements to get instant matches</p></div>
            </div>
            <div className="row mt-3 font20 align-items-center pl-sm-2">
              <div className="col-1"><i className="fa-regular fa-circle-check mr-5 pr-5 pl-sm-2" style={{ fontWeight: '200 !important', fontSize: 40, color: '#3DCA89' }}></i></div>
              <div className="col-11">
                <p style={{ fontWeight: 400, color: '#3F3F3F'   ,fontFamily: "Barlow,sans-serif"}} className="font19x pl-4 fontpaddingleft"> Collaborate with our recruitment specialists for
                  seamless hiring</p>

              </div>
            </div> 

           
            <div className="row pb-sm-5 pl-3 mt-3 ml-sm-2 mt-sm-2 pt-sm-5 align-items-center">
            <button className="Preview_candidates_btn  mr-4 mt-sm-1 " style={{  fontFamily: "Barlow,sans-serif"}} onClick={() => navigate('/#coursesWeOffer')} >Preview candidates</button>
            <button className="hire_now_btn  mt-sm-1   " style={{  fontFamily: "Barlow,sans-serif"}}  onClick={() => navigate('/#coursesWeOffer')} >Hire now</button>
            </div>
          </div>
        </div>
      </div>


      {/* Second Row */}
      <div className="container-fluid  pl-4  p-sm-0 "
        style={{
          // backgroundColor: '#5A8C75',
          backgroundImage: `url(${wave2})`,
          backgroundSize: 'contain',
          backgroundPosition: "center top",
          // backgroundSize: 'cover',
          // backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          padding: 0,
        }}>
        <div className="row align-items-center pb-5">
          <div className="col-lg-6  p-0 pl-sm-4 col-md-6 col-sm-12 pr-4">
            <img src={WeD2} alt="Wed2" className="img-container w-100 pr-sm-3 " />
          </div>
          <div className="pl-sm-4 col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-sm-center text-lg-left  ">
            <h1 className="pl-sm-2 mb-sm-5 pb-sm-5 mt-2" style={{ fontWeight: 400, fontSize: "3.3rem", fontFamily: "Barlow,sans-serif" }}>  <span style={{ color: '#160A54', fontFamily: "Barlow,sans-serif" }}>Make the  </span><span style={{ color: '#04642D' }}> career move <br />
              you want</span></h1>
            <div className="row mt-3 font20 align-items-center pl-sm-2">
              <div className="col-1"><i className="fa-regular fa-circle-check mr-4  pl-sm-2" style={{ fontWeight: '200 !important', fontSize: 40, color: '#160A54' }}></i></div>
              <div className="col-11"><p style={{ fontWeight: 400, color: '#3F3F3F', fontFamily: "Barlow,sans-serif" }} className="font18 pl-4"> Get instant job recommendations tailored to your skills and goals</p></div>
            </div>
            <div className="row mt-3 font20 align-items-center pl-sm-2">
              <div className="col-1"><i className="fa-regular fa-circle-check mr-4  pl-sm-2" style={{ fontWeight: '200 !important', fontSize: 40, color: '#160A54' }}></i></div>
              <div className="col-11"><p style={{ fontWeight: 400, color: '#3F3F3F', fontFamily: "Barlow,sans-serif" }} className="font18 pl-4 pr-sm-5"> Gain exposure to a range of companies and job types: fully
                remote,  hybrid or on-site, and contract or permanent</p></div>
            </div>
            <div className="row mt-3 font20 align-items-center pl-sm-2">
              <div className="col-1"><i className="fa-regular fa-circle-check mr-4  pl-sm-2" style={{ fontWeight: '200 !important', fontSize: 40, color: '#160A54' }}></i></div>
              <div className="col-11">
                <p style={{ fontWeight: 400, color: '#3F3F3F', fontFamily: "Barlow,sans-serif" }} className="font18 pl-4 pr-sm-5"> Access competitive pay, benefits, and free online training and
                  development</p>

              </div>
            </div>
            <div className="row pb-sm-5 pl-3 mt-3 ml-sm-2 mt-sm-2 pt-sm-5 align-items-center">
            <button className="Preview_candidates_btn  mr-4 mt-sm-1" style={{ backgroundColor: "#160A54", fontFamily: "Barlow,sans-serif" }} onClick={() => navigate('/#coursesWeOffer')} >Get job matches</button>
            <button className="hire_now_btn   mt-sm-1   " style={{ color: "#160A54", borderColor: "#160A54", fontFamily: "Barlow,sans-serif" }} onClick={() => navigate('/#coursesWeOffer')} >Learn more</button>
            </div>
          </div>
        </div>
      </div>


      {/* Third Row */}
      <div className='container-fluid d-md-block d-none p-0 m-0'>
      <div className="row align-items-center p-sm-4  pr-0  ">
        {/* Column with alternating images (Left) */}
        <div className="col-lg-4 col-md-4 col-sm-12  pr-sm-5 pl-sm-5 ">
          <div className="d-flex flex-column align-items-end pr-2">
            <div className={`col-12 text-right pl-0    pr-4 ${animate ? 'animated-left' : ''}`}>
              <img src={left1} alt="Left 1" style={{ width: "43%" }} />
            </div>
            <div className={`col-12 text-left pl-sm-2 p-0 ${animate ? 'animated-right' : ''}`}>
              <img src={left2} alt="Left 2" style={{ width: "35%", }} />
            </div>
            <div className={`col-12 text-right pr-0 pl-0 mb-5 ${animate ? 'animated-left' : ''}`}>
              <img src={left3} alt="Left 3" style={{ width: "58%" }} />
            </div>

            <div className={`col-12 text-left p-0 ${animate ? 'animated-right' : ''}`}>
              <img src={left4} alt="Left 4" style={{ width: "45%" }} />
            </div>
            <div className={`col-12 text-right  pr-sm-3 pl-0 ${animate ? 'animated-left' : ''}`}>
              <img src={left5} alt="Left 5" style={{ width: "38%" }} />
            </div>
          </div>
        </div>

        {/* Middle Column with Text */}
        <div className="col-lg-4 col-md-4 col-sm-12 text-center p-0 m-0">
          <h1 className="mb-1 text-center" style={{ fontWeight: 700, fontSize: "1.25rem", fontFamily: "Barlow, sans-serif" }}>
            <span style={{ color: '#160A54' }}>JOIN THE BEST</span>
          </h1>

          <div className="mx-auto d-flex align-items-center justify-content-center"style={{
           
          }} >
            <span className="mb-5 text-center" style={{ lineHeight:1.17, fontWeight: 700, fontSize: "3rem",color: '#160A54', fontFamily: "Inria Serif, serif" }}>
              
                Powering 100,000+ of the best customer experiences
          
            </span>
          </div>
          <div className="text-center ">
            <button
              className="free_trail_btn mr-4"
              style={{ backgroundColor: "#04642D", padding: '17px 32px', fontSize: '1.1rem',fontFamily: "Barlow, sans-serif" }}
              onClick={() => navigate('/#coursesWeOffer')}
            >
              Free Trial
            </button>
            <button
              className="get_free_demo"
              onClick={() => navigate('/#coursesWeOffer')}
            >
              Get Free Demo
            </button>
          </div>
        </div>

        {/* Column with alternating images (Right) */}
        <div className="col-lg-4 col-md-4 col-sm-12  pr-sm-4 pl-sm-5">
          <div className="d-flex flex-column align-items-start pl-4 ">
            <div className={`col-12 text-left mb-4 ${animate ? 'animated-right' : ''}`}>
              <img src={right1} alt="Right 1" style={{ width:"42%",}} />
            </div>
            <div className={`col-12 text-right pr-5 mb-4   ${animate ? 'animated-left' : ''}`}>
              <img src={right2} alt="Right 2" style={{width:"22%" }} />
            </div>
            <div className={`col-12 text-left mb-5   ${animate ? 'animated-right' : ''}`}>
              <img src={right3} alt="Right 3" style={{ width:"38%"}} />
            </div>
            <div className={`col-12 text-right p-0 mb-5 ${animate ? 'animated-left' : ''}`}>
              <img src={right4} alt="Right 4" style={{ width:"50%",}} />
            </div>
            <div className={`col-12 text-left ${animate ? 'animated-right' : ''}`}>
              <img src={right5} alt="Right 5" style={{ width:"42%", }} />
            </div>
          </div>
        </div>
      </div>
      </div>


    </div>
  );
}

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 0 10px; /* Space between slides */
    background-color: transparent;
    
  }
  .card-style1 {
    height:400px;
    width: 18rem;
    border-radius: 16px;
    border: 1px solid #FDD8A3;
    background-color: white;
  }
  .card-style2 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #8FCEC1;
    background-color: white;
  }
  .card-style3 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #c3b25a;
    background-color: white;
  }
  .card-style4 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #60bd92;
    background-color: white;
  }
  .card-style5 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #ac6558;
    background-color: white;
  }
  .card-style6 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #81b5ad;
    background-color: white;
  }
  .slick-prev, .slick-next {
    /* background-color: white; */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 20px;
    color: rgb(90, 140, 117);
  }
`;
