
import React from "react";
import homeBannerGif from '../../assets/gifs/headervideo.gif'; // Update this with your actual GIF path
import vector from '../../assets/Vector.png';
import { useNavigate } from "react-router-dom";
import header from '../../assets/WhatWeDo/header.png'
import styled from "styled-components";


export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="" style={{ backgroundColor: '#d5d0ef' }}> */}
      <div className="bg-cover bg_purple  pl-lg-5 pr-lg-5 py-3 px-2 pb-5 4 m-0 p-0 bg-center d-flex align-items-start justify-content-start  "
       >
        <div className="row align-items-center justify-content-between  mt-sm-4 m-0 p-0"
         style={{
          // backgroundColor: '#5A8C75',
          backgroundImage: `url(${header})`,
          backgroundSize: 'cover',
  
          // backgroundPosition: 'center center',  // This ensures the image starts from the top
          backgroundRepeat: 'no-repeat',
  
        }}
        >

          {/* Left side text content */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 pl-4  overflow-hidden p-0  m-0">
          <div className="d-sm-block d-none" style={{ height: 35 }}></div>

            <h3 className="mb-2 font-weight-500 pt-sm-2" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '45px', color: '#160A54', lineHeight: '1.2' }}>
              Building Teams, <br />Driving Business Growth
            </h3>
            <div className="d-sm-block d-none" style={{ height: 35 }}></div>
            <div className="d-sm-block " style={{ height: 10 }}></div>

            <p className="mb-4 mr-2" style={{ fontSize: '22px', fontFamily: 'Barlow, sans-serif', color: '#160A54' }}>
              Find skilled candidates, in-demand jobs, and the solutions you need to help you do your best work yet.
            </p>
            <div className="d-sm-block d-none" style={{ height: 35 }}></div>
            <div className="d-sm-block " style={{ height: 10 }}></div>

            <div className="d-flex flex-column flex-md-row align-items-start align-items-lg-start justify-content-between">
              {/* FOR JOB SEEKERS Section */}
              <div className="col-md-4 mb-4 mb-md-0 p-0 mr-sm-2">
    <h2 className="mb-3" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '20px', color: '#160A54', fontWeight: '500' }}>
        FOR JOB SEEKERS
    </h2>
    <button
        className="btn btn-job-seeker mb-lg-2"style={{   fontFamily: 'Inter, sans-serif'}}
        onClick={() => navigate('/GetInTouch')}
    >
        Find your next job
    </button>
</div>



              {/* Vertical Line */}
              <div className="col-md-1 d-flex justify-content-start m-2">
                <div
                  className="custom-border-right d-none d-md-block"
                  style={{
                    width: '2px',
                    backgroundColor: '#160A54',
                    alignSelf: 'center', // Centers the line vertically within the column
                    height: '100px', // Adjust height as needed
                  }}
                ></div>

              </div>



              {/* FOR BUSINESS Section */}
              <div className="col-md-7 mb-4 mb-md-0 p-0 ml-sm-2 ">
    <h2 className="mb-3" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '20px', color: '#160A54', fontWeight: '500' }}>
        FOR BUSINESS
    </h2>
    <div className="d-flex flex-row flex-wrap">
        <button
            className="btn btn-custom mb-lg-2 mb-2"
            style={{fontFamily: 'Open Sans, sans-serif',}}
            onClick={() => navigate('/GetInTouch')}
        >
            Preview candidates
        </button>

        <button
            className="btn btn-custom mb-lg-2 mb-2"
            style={{fontFamily: 'Open Sans, sans-serif',}}
            onClick={() => navigate('/GetInTouch')}
        >
            Hire now
        </button>
    </div>
</div>

            </div>

          </div>


          {/* Right side GIF with responsive background and rounded corners */}
          <div className="col-12 col-md-6  position-relative order-1 order-md-2 mb-4 mb-md-0 d-block ">
            {/* Background vector image positioned at the top left, outside the wrapping div */}
            <div
              style={{
                position: 'absolute',
                top: '-17px', // Move it up slightly outside the container
                left: '-4px', // Move it left slightly outside the container
                backgroundImage: `url(${vector})`,
                backgroundSize: 'contain', // Adjust as needed
                backgroundRepeat: 'no-repeat', // Prevent repeating the image
                width: '160px', // Set a width for the vector image (adjust as needed)
                height: '160px', // Set a height for the vector image (adjust as needed)
                zIndex: 3,
              }}
            ></div>

            {/* Wrapping div for stacking */}
            <div className="position-relative"
              style={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Background color div with shadow effect */}
              <div
                style={{
                  position: 'absolute',
                  borderRadius: '100px',
                  marginTop: '5px',
                  marginLeft: '9px',
                  backgroundColor: '#837bad',
                  // width: '87%',
                  height: '100%',
                  width: '100%',
                  zIndex: 1,
                }}
              ></div>

              {/* GIF positioned on top of the background */}
              <div className="position-relative" style={{ zIndex: 2 }}>

                <img
                  src={homeBannerGif}
                  alt="Header GIF"
                  className="img-fluid"
                  style={{
                    borderRadius: '100px',
                    width: '100%',
                    maxWidth: '100%',
                    marginTop: '0px',
                    height: '100%', // Set to fill the container
                    maxHeight: '100%', // Ensure it won't exceed this height
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Media query for small devices */}
      <style>
        {`
        /* styles.css */
        /* styles.css */

        .btn-custom {
            background-color: rgba(22, 10, 84, 0.2); /* Dim color on hover */
            color: #160a54;
            border-radius: 50px;
            font-family: 'Barlow, sans-serif';
            font-size: 16px;
            font-weight: 500;
            padding: 13px 17px;
            border-width: 3px;
            border-color: #160A54;
            margin-right: 20px; /* Add margin here */
            transition: color 0.3s ease; /* Smooth color transition */
        }

        .btn-custom:hover {
        background-color: transparent;
            color: #160a54;

        }

        .btn-custom:last-child {
            margin-right: 0; 
        }


        .btn-job-seeker {
            background-color: #160A54;
            border-radius: 50px;
            color: white;
            font-family: 'Inter, sans-serif';
            font-size: 16px;
            font-weight: 400;
            padding: 14px 17px;
            transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
        }

        .btn-job-seeker:hover {
            background-color: #100741;
            color: #C8B8B8;
            transform: translateY(-2px); /* Slight upward movement */
            transform: translateX(2px); /* Slight upward movement */

        }

      /* Default height */
          .custom-border-right {
            height: 100px;
          }

          /* Screen width 992px and above */
          @media (min-width: 992px) {
            .custom-border-right {
              height: 120px;
            }
          }

          /* Screen width 800px and below */
          @media (max-width: 800px) {
            .custom-border-right {
              height: 140px;
            }
          }

          @media (max-width: 600px) {
            .custom-border-right {
              height: 140px;
            }
          }
          @media (max-width: 768px) {
            .container-fluid {
              padding: 20px !important;
            }
            h3 {
              font-size: 36px !important;
            }
            p {
              font-size: 20px !important;
            }
            .mr-4 h2, .mb-3 {
              font-size: 24px !important;
            }
            .btn {
              padding: 10px 20px !important;
            }
            .border-right {
              display: none !important;
            }
          }

          @media (max-width: 576px) {
            h3 {
              font-size: 28px !important;
            }
            p {
              font-size: 18px !important;
            }
            .mr-4 h2, .mb-3 {
              font-size: 20px !important;
            }
            .btn {
              padding: 8px 15px !important;
            }
          }
        `}
      </style>
    </>
  );
}
