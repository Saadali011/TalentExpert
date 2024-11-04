// import React, { useEffect } from 'react';
// import TopNavbar from '../../components/Nav/TopNavbar';
// import Footer from '../../components/Sections/Footer/Footer';
// import cp_header from '../../assets/CorporateTraining/CP_Header.png';
// import frame from '../../assets/CorporateTraining/frame.png';
// import karachi from '../../assets/CorporateTraining/karachi.png';
// import global from '../../assets/CorporateTraining/global.png';
// import islamabad from '../../assets/CorporateTraining/islamabad.png';
// import Lahore from '../../assets/CorporateTraining/lahore.png';
// import frame2 from '../../assets/CorporateTraining/frame2.png';


// import style from "./CorporateTrainings.module.css";


// export default function CorporateTrainings() {

//     const { custom_img, bg_purple, section1_banner_container, zain, banner_paragraph, banner_heading, generic_heading_left, generic_heading_center, training_container, training_container_img, future_training_btn, training_container_white, card_style, p_color, gradientCircle, gradientCircleRow, bgF7FDE8, card, gradientCircleLeft, gradientCircleLeftcontainer, rectangle_box, cDateTime, rectangle_boxOne } = style;

//     const cardsData = [
//         {
//             title: "Karachi, Pakistan",
//             imgSrc: karachi,
//             description: "Some quick example text to build on the card title and make up the bulk of the card's content."
//         },
//         {
//             title: "Islamabad, Pakistan",
//             imgSrc: islamabad,
//             description: "Some quick example text to build on the card title and make up the bulk of the card's content."
//         },
//         {
//             title: "Lahore, Pakistan",
//             imgSrc: Lahore,
//             description: "Some quick example text to build on the card title and make up the bulk of the card's content."
//         },
//         {
//             title: "Global",
//             imgSrc: global,
//             description: "Some quick example text to build on the card title and make up the bulk of the card's content."
//         }
//     ];

//     return (
//         <>
//             <TopNavbar />
//             <div className={`container-fluid p-0  ${bg_purple}`} style={{
//                 backgroundImage: `url(${frame})`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//             }}>
//                 <div className={`row m-auto d-flex${section1_banner_container} ${bg_purple} `}
//                     style={{
//                         backgroundImage: `url(${cp_header})`,
//                         backgroundSize: 'cover',
//                         backgroundRepeat: 'no-repeat',
//                         width: '100%',
//                     }}>
//                     <div className="col-12 col-md-12 col-lg-12 p-0 pb-5 pt-5 "
//                         style={{
//                             backgroundImage: `url(${frame2})`,
//                             backgroundSize: 'cover',
//                             backgroundRepeat: 'no-repeat',
//                         }} >
//                         <div className=" d-flex flex-column justify-content-center align-items-center text-center px-3 py-5 my-5"
//                             style={{
//                                 position: "relative",
//                                 zIndex: 2,
//                             }}>
//                             <h2 className={`text-white pt-3 ${banner_heading}`}>JOBS</h2>
//                             <div className="row justify-content-center">
//                                 <div className="col-lg-12 mt-1">
//                                     <span className={`${banner_paragraph} text-white my-4`}>Lorem IPSUM Lorem IPSUM Lorem IPSUM</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Second Section with Responsive Adjustments */}
//                 <div className={`row m-auto mt-4 ${section1_banner_container}`}>
//                     <div className="col-12 col-md-6 p-0 ">
//                         <div className="d-flex flex-column text-start px-5 mx-lg-2 py-5 my-5" style={{ position: "relative", zIndex: 2 }}>
//                             <div className="row justify-content-start">
//                                 <div className="col-12">
//                                     <span className={`${banner_paragraph} my-4 `} style={{ color: "#160A54", fontSize: "32px" }}>
//                                         10Pearls is an equal opportunity employer committed to maintaining a diverse workplace.
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-12 col-md-6 p-0 ">
//                         <div className="d-flex flex-column text-start px-5 mx-lg-2 py-5 my-5" style={{ position: "relative", zIndex: 2 }}>
//                             <div className="row justify-content-start">
//                                 <div className="col-12">
//                                     <span className={`${banner_paragraph} my-4`} style={{ color: "#160A54", fontSize: "22px" }}>
//                                         10Pearls seeks professionals who thrive on new challenges and strive for fun. Our employees have the unique opportunity of not only helping solve challenges for our clients, but also to help define 10Pearls’ growth and direction. Our unique business practices, culture, and immense opportunity for growth help us attract professionals with an entrepreneurial spirit.
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="container-fluid mt-2 pb-4  pl-lg-4 pr-lg-4">
//                     <div className="row justify-content-center m-0 mt-5 pb-5">
//                         {cardsData.map((card, index) => (
//                             <div
//                                 className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center"
//                                 key={index}
//                             >
//                                 <div className="text-center" style={{ width: '100%', maxWidth: '400px' }}>
//                                     <img
//                                         className={`card-img-top ${custom_img}`}
//                                         src={card.imgSrc}
//                                         alt={`Image of ${card.title}`}
//                                         style={{ width: '100%', height: 'auto' }}
//                                     />
//                                     <h5
//                                         className="card-title m-3"
//                                         style={{
//                                             fontFamily: "Barlow, sans-serif",
//                                             fontSize: "30px",
//                                             fontWeight: "400",
//                                         }}
//                                     >
//                                         {card.title}
//                                     </h5>
//                                     <div
//                                         className="card-text"
//                                         style={{
//                                             color: '#160A54',
//                                             fontFamily: "Barlow, sans-serif",
//                                             fontSize: "26px",
//                                             fontWeight: "400",
//                                             cursor: "pointer"
//                                         }}
//                                         onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
//                                         onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
//                                     >
//                                         see open positions
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>


//             </div>
//             <Footer />
//         </>
//     );
// }

import React, { useEffect } from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import cp_header from '../../assets/CorporateTraining/CP_Header.png';
import frame from '../../assets/CorporateTraining/frame.png';
import karachi from '../../assets/CorporateTraining/karachi.png';
import global from '../../assets/CorporateTraining/global.png';
import islamabad from '../../assets/CorporateTraining/islamabad.png';
import Lahore from '../../assets/CorporateTraining/lahore.png';
import frame2 from '../../assets/CorporateTraining/frame2.png';


import style from "./CorporateTrainings.module.css";


export default function Career() {

    const { custom_img, bg_purple, section1_banner_container, zain, banner_paragraph, banner_heading, generic_heading_left, generic_heading_center, training_container, training_container_img, future_training_btn, training_container_white, card_style, p_color, gradientCircle, gradientCircleRow, bgF7FDE8, card, gradientCircleLeft, gradientCircleLeftcontainer, rectangle_box, cDateTime, rectangle_boxOne } = style;

    const cardsData = [
        {
            title: "Karachi, Pakistan",
            imgSrc: karachi,
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            title: "Islamabad, Pakistan",
            imgSrc: islamabad,
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            title: "Lahore, Pakistan",
            imgSrc: Lahore,
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            title: "Global",
            imgSrc: global,
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ];

    return (
        <>
            <TopNavbar />
            <div className={`container-fluid p-0  ${bg_purple}`} style={{
                backgroundImage: `url(${frame})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className={`row m-auto d-flex${section1_banner_container} ${bg_purple} `}
                    style={{
                        backgroundImage: `url(${cp_header})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                    }}>
                    <div className="col-12 col-md-12 col-lg-12 p-0 pb-5 pt-5 "
                        style={{
                            backgroundImage: `url(${frame2})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }} >
                        <div className=" d-flex flex-column justify-content-center align-items-center text-center px-3 py-5 my-5"
                            style={{
                                position: "relative",
                                zIndex: 2,
                            }}>
                            <h2 className={`text-white pt-1 pl-sm-2 ${banner_heading} `}>JOBS</h2>
                            <div className="row justify-content-center">
                                <div className="col-lg-12"
                                style={{
                                    marginTop:"13px",
                                }}>
                                    <span className={`${banner_paragraph} text-white my-4`}>LOREM IPSUM LOREM IPSUM LOREM IPSUM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`row m-auto mt-4 ${section1_banner_container}`}>
                    <div className="col-12 col-md-5 p-0 ">
                        <div className="d-flex flex-column text-start px-5 mx-lg-2 py-5 my-5" style={{ position: "relative", zIndex: 2 }}>
                            <div className="row justify-content-start">
                                <div className="col-12">
                                    <span className={`${banner_paragraph} my-4 `} style={{ color: "#160A54", fontSize: "35px" }}>
                                        10Pearls is an equal
                                        opportunity employer
                                        committed to maintaining a
                                        diverse workplace.
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-5 p-0 ">
                        <div className="d-flex flex-column text-start    py-5 my-5" style={{ position: "relative", zIndex: 2 }}>
                            <div className="row justify-content-start">
                                <div className="col-12">
                                    <span className={`${banner_paragraph} my-4`} style={{ color: "#160A54", fontSize: "24.5px" , PaddingRight: "10px" }}>
                                        10Pearls seeks professionals who thrive on new challenges
                                        and strive for fun. Our employees have the unique
                                        opportunity of not only helping solve challenges for our
                                        clients, but also to help define 10Pearls’ growth and
                                        direction. Our unique business practices, culture and
                                        immense opportunity for growth help us attract
                                        professionals that have an entrepreneurial spirit.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-2 pb-4  pl-lg-4 pr-lg-4">
                    <div className="row justify-content-center m-0 mt-5 pb-5">
                        {cardsData.map((card, index) => (
                            <div
                                className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center"
                                key={index}
                            >
                                <div className="text-center" style={{ width: '100%', maxWidth: '400px' }}>
                                    <img
                                        className={`card-img-top ${custom_img}`}
                                        src={card.imgSrc}
                                        alt={`Image of ${card.title}`}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <h5
                                        className="card-title m-3"
                                        style={{
                                            fontFamily: "Barlow, sans-serif",
                                            fontSize: "25px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        {card.title}
                                    </h5>
                                    <div
                                        className="card-text"
                                        style={{
                                            color: '#160A54',
                                            fontFamily: "Barlow, sans-serif",
                                            fontSize: "23px",
                                            fontWeight: "400",
                                            cursor: "pointer"
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                                    >
                                        see open positions
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <Footer />
        </>
    );
}
