import React, { useEffect } from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';


import style from "Blog.module.css";


export default function CorporateTrainings() {

    const { } = style;

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
            <div className={`container-fluid p-0 `} style={{
                // backgroundImage: `url(${frame})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
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
                                            fontSize: "30px",
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
                                            fontSize: "26px",
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
