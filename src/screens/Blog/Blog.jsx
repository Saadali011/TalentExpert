

import React from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import frame from "../../assets/blog/frame.png";
import bg1 from "../../assets/blog/bg1.png";
import bg2 from "../../assets/blog/bg2.png";

import style from "./Blog.module.css";

export default function Blog() {
    const { bg_purple } = style;

    return (
        <>
            <div className={`container-fluid ${bg_purple}`} style={{
                backgroundImage: `url(${frame})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <TopNavbar />

                <div className="container py-5 position-relative ml-5 mr-5 pl-5 pr-5 mt-5" style={{
                   
                }}>
                    <img
                        src={bg1}
                        className="img-fluid w-100 rounded position-relative "
                        alt="Secondary background image"
                        style={{
                            zIndex: 1,  // This keeps bg1 in the background
                        }}
                    />
                    
                    <div className="position-absolute bg-white p-3 rounded shadow-sm" style={{
                        bottom: '85px', left: '170px', right: '650px', zIndex: 3
                    }}>
                        <div className="tag badge badge-primary mb-2">
                            Technology
                        </div>
                        <h2 className="title h4 text-dark mb-2">
                            The Impact of Technology on the Workplace: How Technology is Changing
                        </h2>
                        <div className="author d-flex align-items-center text-muted">
                            <img
                                src="https://storage.googleapis.com/a1aa/image/xryAnF7624YfHSMAVVjcEe3bulSrKt2ahTvDhgJ1fAJKzQZnA.jpg"
                                className="rounded-circle mr-2"
                                alt="Author's profile picture"
                                width="30" height="30"
                            />
                            <span>Jason Francisco</span>
                            <span className="ml-2">August 20, 2022</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
