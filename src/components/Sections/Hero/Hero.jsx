
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardImage1 from "../../../assets/hero/hero1.png";
import cardImage2 from "../../../assets/hero/hero2.png";
import svg1 from "../../../assets/hero/hero1.svg";
import svg2 from "../../../assets/hero/hero2.svg";
import svg3 from "../../../assets/hero/hero3.svg";
import svg4 from "../../../assets/hero/hero4.svg";
import arrow_down from "../../../assets/hero/arrow/arrow_down.svg";
import arrow_up from "../../../assets/hero/arrow/arrow_up.svg";
import hero from '../../../assets/WhatWeDo/hero.png';
import style from "./style.module.css";

const Hero = () => {
  const { custom_container, bg_purple, slide_in } = style;
  const [hoveredReadMore, setHoveredReadMore] = useState(null);

  const navigate = useNavigate();
  const [activeCards, setActiveCards] = useState([false, false, false, false]); // Track each card's expanded state
  const [hoveredCard, setHoveredCard] = useState(null); // Track the hovered card for background change

  const cardData = [
    { src: cardImage1, svgpicture: svg1, title: "Suite Placement Services", longText: "We connect you with top-tier executives who drive strategic growth. Our focus is on finding leadership that" },
    { src: cardImage1, svgpicture: svg2, title: "Learning & Development", longText: "We offer tailored training programs to enhance employee skills and foster professional growth. Empower your teams to achieve their full potential" },
    { src: cardImage2, svgpicture: svg3, title: "Recruitment Search", longText: "Our recruitment experts find the right talent to meet your business needs. We ensure a seamless process from sourcing" },
    { src: cardImage1, svgpicture: svg4, title: "Staff Outsourcing", longText: "We provide flexible staffing solutions to manage your workforce efficiently. From temporary to permanent, we ensure the right fit for your organization" }
  ];

  const handleExpandClick = (index) => {
    setActiveCards(prev => {
      const updated = [...prev];
      updated[index] = !updated[index]; // Toggle the specific card
      return updated;
    });
  };

  return (
    <div className={`mx-sm-3 pl-4 pr-4 ${bg_purple} ${custom_container} pb-5`}
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "#F8F8F4",
        borderRadius: "0 0 30px 30px",
        position: "relative",
        zIndex: 1,
        boxSizing: 'border-box'
      }}
    >
      <div className="row " style={{ paddingLeft: "10px" }}>
        <div className="col-12 pl-sm-5 col-md-6 d-flex mt-5 text-start  text-md-left align-items-center">
          <div className="row pl-sm-4  ">
            <h1 className={`orange-color  ml-sm-2 ml-lg-2 ${slide_in}`} style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: "3rem",
              fontWeight: 700,
            }}>
              Our Services
            </h1>
            <h1 className={`my-2 ml-sm-2 ${slide_in} pt-sm-3 text-start`} style={{
              lineHeight: 1.4,
              fontSize: "2.5rem",
              fontFamily: "Barlow, sans-serif",
              fontWeight: 600,
              color: "#1C1C1C"
            }}>
              Complete Workforce Solutions: Hire, Vet, and Grow
            </h1>
          </div>
        </div>
        <div className="col-12 col-md-6 py-sm-3 p-0 mt-sm-5 pl-sm-4 d-flex justify-content-center align-items-start">
          <p className={`text-sm-center   ${slide_in} pr-sm-4 pl-sm-5`} style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#1C1C1C",
            fontSize: "1.29rem",
          }}>
            Our dedication is to cultivate strategic human acumen, nurturing professional competence to unlock individual potential. We empower employees to climb their chosen ladders through career development programs and initiatives.
          </p>
        </div>
      </div>

      <div className="row pt-sm-4 d-flex justify-content-center"
        // style={{
        //   marginBlockEnd: activeCards.every(isActive => !isActive) ? "90px" : "0px",
        // }}
      >
        {cardData.map((card, index) => (
          <div key={index} className={`col-lg-3 col-md-4 col-sm-6 col-12 mt-5 pt-sm-1 d-flex justify-content-center`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card" style={{
              width: "300px",
              overflow: "hidden",
              backgroundColor: "#F8F8F4",
              position: "relative",
              height: activeCards[index] ? "380px" : "300px",
              transition: "height 0.3s ease",
            }}>
              <img className="card-img-top" src={card.src} alt={card.title} style={{ width: "100%" }} />
              <div style={{
                position: "absolute",
                top: "90px",
                right: "24px",
                width: "90px",
                height: "90px",
                backgroundColor: hoveredCard === index || activeCards[index] ? "#7A490C" : "#FFFFFF",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                border: hoveredCard === index || activeCards[index] ? "2px solid #7A490C" : "none",
              }}>
                <img src={card.svgpicture} alt="Services Icon" style={{
                  width: "63px",
                  height: "150px",
                  filter: hoveredCard === index || activeCards[index] ? "brightness(0) invert(1)" : "none",
                }} />
              </div>

              <div className="card-body p-0 pl-sm-4 pr-sm-4 pt-3" style={{ backgroundColor: "#efddc7" }}>
                <h5 className="card-title font18 mt-5 pt-2 text-center" style={{
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  color: "#7A490C",
                  fontFamily: "Montreal Medium, inherit",
                  // fontStyle:"normal"
                }}>{card.title}</h5>

                <div className={`card-text pl-1 pr-1 p-0 ${activeCards[index] ? "expanded" : ""}`} style={{
                  maxHeight: activeCards[index] ? "120px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                  fontSize: "0.94rem",
                  fontWeight: "400",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#7A490C",
                  textAlign: "center",
                  lineHeight: "1.25",
                }}>
                  {card.longText}
                </div>

                <div style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0",
                  right: "30px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                }}
                  onClick={() => handleExpandClick(index)}
                  onMouseEnter={() => !activeCards[index] && setHoveredReadMore(index)}
                  onMouseLeave={() => setHoveredReadMore(null)}
                >
                  <p className="" style={{
                    fontWeight: "500",
                    marginBottom :"12px",
                    fontSize: "14.008px",
                    fontFamily: "",
                    color: activeCards[index] ? "#7A490C" : (hoveredReadMore === index ? "#04642d" : "#7A490C"),
                    textUnderlineOffset: "5px",
                    textDecoration: activeCards[index] || hoveredReadMore === index ? "none" : "underline",
                  }}>
                    
                    {activeCards[index] ? "READ LESS" : "READ MORE"}{" "}
                    <span style={{
                      display: "inline-block",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: activeCards[index] ? "#7A490C" : (hoveredReadMore === index ? "black" : "#7A490C"),
                      fontFamily: "Montreal Medium, inherit",
                      transition: "transform 0.3s ease",
                      textDecoration: activeCards[index] || hoveredReadMore === index ? "none" : "underline",
                    }}>
                      {activeCards[index] ? (
                        <img
                          src={arrow_up}
                          alt="Arrow Up"
                          style={{
                            width: "11px",
                            transform: "rotate(-5deg)", // rotation for the up arrow
                            transition: "transform 0.3s ease",
                          }}
                        />
                      ) : (
                        <img
                          src={arrow_down}
                          alt="Arrow Down"
                          style={{
                            width: "11px",
                            transform: "rotate(5deg)", // rotation for the down arrow
                            transition: "transform 0.3s ease",
                          }}
                        />
                      )}
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
