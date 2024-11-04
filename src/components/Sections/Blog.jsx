

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import offerbg from '../../assets/offerbg.png';
import { getMethod, codeError, ClientId } from "../../utils/services";
import { useLocation } from "react-router-dom";
import wave6 from '../../assets/WhatWeDo/wave6.png';
import wave7 from '../../assets/WhatWeDo/wave7.png';

// import styled from "./style.module.css";
export default function Stepper() {
  // const { } = style;
  const [ImagesData, setImagesData] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [visibleStep, setVisibleStep] = useState(0); // Track the currently visible step
  const [togglebtn, settogglebtn] = useState(1)

  // Step labels
  const steps = [
    { label: 'Client & Team Discussion' },
    { label: 'Talent Sourcing & Screening' },
    { label: 'Candidate Shortlisting' },
    { label: 'Client Review Shortlisted candidates' },
    { label: 'Client Interviews Candidates' },
    { label: 'Client Feedback' },
    { label: 'Hired' },
  ];

  const Toglebutton = (index) => {
    settogglebtn(index)
  }
  const loadCategory = () => {
    try {
      getMethod(`SMCourse/V2/Coursecategory/`)
        .then((data) => {
          if (data?.IsSuccess) {
            setCategories(data.Data);
            loadCourses(data.Data[0]?.Id);
          }
        })
        .catch(error => {
          codeError(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const loadCourses = (vtype) => {
    try {
      getMethod(`SMCourse/V2/ClientCourseWithoutToken/${ClientId}/${vtype}`)
        .then((data) => {
          if (data?.IsSuccess) {
            setImagesData(data.Data);
          }
        })
        .catch(error => {
          codeError(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  useEffect(() => {
    loadCategory();

    // Set a timer to reveal each step one by one
    const timer = setInterval(() => {
      setVisibleStep((prev) => {
        if (prev < 6) return prev + 1; // Increment the step, max 6 for 7 steps
        clearInterval(timer); // Clear timer when max is reached
        return prev;
      });
    }, 1000); // Change delay here for timing between steps

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="container-fluid  p-0 m-0"
    style={{
      backgroundImage: `url(${wave7})`,
      backgroundSize: 'cover',
      backgroundPosition : "top left",
      backgroundRepeat: 'no-repeat',

      position: 'relative'
      // position: 'relative'
    }}
      id="coursesWeOffer"
    >
      
      
      <div className=" d-md-block d-none" style={{ height: 98,  }}></div>
      <div className="w-100  d-md-block d-none">
      {/* <div className=" d-sm-block d-none" style={{ height: 160,  }}></div> */}

        <h1 className="text-center  ">
          <span style={{ color: '#160A54', fontSize : '3.2rem', fontWeight : "bold",lineHeight:"1.4",  fontFamily: "Barlow, sans-serif"}}>Learn More About
            <br /> Our <span style={{ color: '#04642D' }}>Working Process</span></span>
        </h1>
      </div>
      <div className=" d-sm-block d-none" style={{ height: 88,}}></div>

      <StepperWrapper>
        <StepperContainer>
          {steps.map((step, index) => (
            <Step key={index} visible={index <= visibleStep}>
              <StepNumber style={{ fontFamily: "Open Sans, sans-serif",    }}>{index + 1}</StepNumber>
              {index < 6 && <StepLine />} {/* Draw line only if not the last step */}
            </Step>
          ))}
        </StepperContainer>

        <StepLabelsContainer>
          {steps.map((step, index) => (
            <StepLabel key={index} visible={index <= visibleStep} style={{ fontFamily: "Open Sans, sans-serif" ,}}>
              {step.label}
            </StepLabel>
          ))}
        </StepLabelsContainer>
      </StepperWrapper>
      <div className=" d-sm-block d-none" style={{ height: 160, width: 20 }}></div>
      <div className="row mt-sm-0 mt-5 justify-content-center pb-5" >
        <div className=" d-flex" style={{ border: "3px solid rgba(22, 10, 84, 1)", padding: "10px 20px", borderRadius: 50 }}>
          <div className="">
            <button className={`${togglebtn == 1 ? 'togglebtn font20' : 'font20'}`} style={{ border: "none", outline: 'none', borderRadius: 25, padding: '10px 20px', background: "transparent" ,fontFamily: "Open Sans, sans-serif" }} onClick={() => Toglebutton(1)}>For Client</button>
          </div>
          <div className="" >
            <button className={`${togglebtn == 2 ? 'togglebtn font20' : 'font20'}`} style={{   border: "none", outline: 'none', borderRadius: 25, padding: '10px 20px', background: "transparent", fontFamily: "Open Sans, sans-serif" }} onClick={() => Toglebutton(2)}>For Candidate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const StepperWrapper = styled.div`
  width: 100%; /* Full width for consistent alignment */
  display: flex;
  flex-direction: column; /* Ensure labels are below the stepper */
  align-items: center; /* Center align steps and labels */
  margin-top: 30px; /* Space above the stepper */

  @media (max-width: 768px) {
    /* When the screen width is less than 768px */
    align-items: flex-start; /* Align items to the start */
  }

  
    
`;

const StepLabelsContainer = styled.div`
  display: flex;
  justify-content: center; /* Center labels */
  margin-top: 0; /* Remove extra space */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack labels vertically */
    align-items: center; /* Center align labels */
    margin-top: 10px; /* Add some margin */
  }
`;

const StepperContainer = styled.div`
  color: #D5D0EF;
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Change to vertical layout */
    align-items: flex-start; /* Align steps to the start */
    margin-top: 20px; /* Add some spacing */
  }
    
  @media (max-width: 1280px) {
    width: 58px; 
    height: 80px;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  color: #160A54;
  align-items: center;

  position: relative;
  margin-top :0px;
  margin-bottom :0px;
  margin-left: 63px ;
  margin-right :40px;
  // margin: 0 49px; /* Space between circles */
  padding: 20px 0; /* Adjust padding to give enough space */
  opacity: ${({ visible }) => (visible ? 1 : 0)}; /* Control visibility */
  transition: opacity 0.5s ease-in-out; /* Animate opacity */

  @media (max-width: 768px) {
    margin: 10px 0; /* Space between steps in vertical layout */
  }
  @media (max-width: 1280px) {
    width: 58px; 
    height: 80px;
 
  }
    
`;

const StepNumber = styled.div`
  width: 79px;
  color: #160A54;
  height: 80px;
  background-color: #D5D0EF; /* Fixed the syntax here */
  
  border: 2px solid #160A54; /* Border color */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
    @media (max-width: 1280px) {
    width: 58px; 
  height: 80px;
  }
`;

const StepLine = styled.div`
  width: 110px; /* Adjust width as needed */
  height: 3px; /* Line thickness */
  background-color: #160A54; /* Line color */
  position: absolute;
  top: 50%; /* Aligns the line to the middle of the step */
  left: 100%; /* Aligns the line to the right of the circle */
  margin-left: -3px; /* Adjust this to bring the line closer to the circle */
  transform: translateY(-50%); /* Center the line vertically */

  @media (max-width: 768px) {
    display: none; /* Hide lines in vertical layout */
  }
  @media (max-width: 1280px) {
    width: 80px; 

  }
`;

const StepLabel = styled.div`
  width: 155px;
  margin-left: 28px;
  // margin: 0 22px; 
  text-align: center; /* Center the label */
  font-size: 16px; /* Adjust font size as needed */
  color: #160A54; /* Label color */
  opacity: ${({ visible }) => (visible ? 1 : 0)}; /* Control visibility */
  transition: opacity 0.5s ease-in-out; /* Animate opacity */
  
  @media (max-width: 768px) {
    margin: 5px 0; /* Adjust margin for vertical layout */
  }
      @media (max-width: 1280px) {
    width: 140px;
    // margin-left: 24px;
  }
`;
