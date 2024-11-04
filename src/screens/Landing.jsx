import React from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Stepper from "../components/Sections/Blog";
import Hero from "../components/Sections/Hero/Hero";
import Footer from "../components/Sections/Footer/Footer";
import Sponsers from "./Sponsers/Sponsers";
import OurTrainer from "./OurTrainers/OurTrainer";
import frame from '../assets/WhatWeDo/frame.png'



export default function Landing() {
  return (
    <> 
      <TopNavbar />
      <Header />

      <div className=" bg_purple m-0 p-0 pt-sm-4"
        style={{
          backgroundImage: `url(${frame})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      >
       <Hero />
       <Stepper />
       <OurTrainer />
      </div>
      <Sponsers />
      <Footer />

    </>
  );
}


