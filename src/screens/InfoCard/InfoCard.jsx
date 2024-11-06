import React, { useEffect, useState } from 'react';
import style from "./style.module.css";
import Countup from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const InfoCard = (props) => {
    const { Info_container, vector, gradientCircle, item } = style;
    const [counter, setCounter] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            {
                windowWidth < 580 ? <div className={`${props?.data?.length <= 4 ? " mt-0 mb-5" : `${Info_container} mt-5 `} p-1  p-sm-0  mx-4 ${Info_container}`}>
                    <div className={`   ${props?.data?.length <= 4 ? 'px-sm-5 justify-content-between pt-sm-3 ' : 'd-flex flex-wrap justify-content-center pt-sm-4 '} align-items-center `}>
                        {props?.data?.map(({ image, heading, discription }, index) => {
                            const updatedDescription = parseInt(discription.replace(/[K+]/g, ''), 10);
                            return (
                                <>
                                    <div
                                        key={index}
                                        className={`${item} ${props?.data?.length <= 4 ? 'py-4' : 'col-6 col-md-3 col-lg-2 flex-column justify-content-center text-center'} d-flex flex-column flex-lg-row align-items-center mb-sm-3 text-lg-left`}
                                        style={{ order: props?.data?.length <= 4 ? '1' : index % 2 === 0 ? '2' : '1' }}
                                    >

                                        {/* <div>
                                    <img src={image} className={`${vector} mr-2`} style={{ width: '65%' }} alt="Students" />
                                </div> */}
                                        <div className='ml-n3 text-center' style={{ color: "#3D336E", }}>
                                            <h6 className={`   ${props?.data?.length <= 4 ? 'my-1' : ''}`}>{heading}</h6>
                                            {!props.count && <h6 style={{ fontWeight: 'bold'  }} className='pt-2'>{discription}</h6>}
                                            {props.count && counter &&
                                                <h6 style={{ fontWeight: 'bold'  }} >
                                                    <Countup start={0} end={updatedDescription} />+
                                                </h6>
                                            }
                                        </div>
                                    </div>
                                    { props?.data?.length <= 4 && <hr style={{ background: "#008F71" }} />     }

                                </>
                            );
                        })}
                    </div>
                    {props?.gradient !== false && <div className={`${gradientCircle} d-none d-lg-block  `}></div>}
                </div> : <div className={`${Info_container} pt-sm-1 pl-sm-1 pl-sm-2 mt-5 mx-0 mx-lg-5 `}>
                    <div className={`d-flex  ${props?.data?.length <= 4 ? 'px-5 justify-content-between' : 'flex-wrap justify-content-center'} align-items-center pt-4`}>
                        {props?.data?.map(({ image, heading, discription }, index) => {
                            const updatedDescription = parseInt(discription.replace(/[K+]/g, ''), 10);
                            return (
                                <div key={index} className={`${item} ${props?.data?.length <= 4 ? '' : 'col-6 col-md-4 col-lg-2'} d-flex flex-column flex-lg-row align-items-center justify-content-center mb-3 text-center text-lg-left`}>
                                    {/* <div>
                                    <img src={image} className={`${vector} mr-2`} style={{ width: '65%' }} alt="Students" />
                                </div> */}
                                    <div className='ml-n3'>
                                        {!props.count && <h6 className='text-center' style={{ fontSize: 62, fontWeight: "500 ", color: "#3D336E", fontFamily: 'Barlow, sans-serif' }}>{discription}</h6>}
                                        {props.count && counter &&
                                            <h6 className='text-center ' style={{ fontWeight: 'bold' }}>
                                                <Countup start={0} end={updatedDescription} />+
                                            </h6>
                                        }
                                        <h6 className=' pt-3 text-sm-center' style={{ fontFamily: 'Barlow,sans-serif', fontWeight: '700', fontSize: "1.17rem" }}>{heading}</h6>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {props?.gradient !== false && <div className={`${gradientCircle} d-none d-lg-block`}></div>}
                </div>
            }

        </ScrollTrigger>
    );
};

export default InfoCard;
