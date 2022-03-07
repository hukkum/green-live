import Slider from "react-slick";
import { CardSmall } from "./small-card";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import React from "react";
import { smallcarditems } from "../../../data/carditems";
export const CardSmallSlider: React.FC = () => {
    const sliderRef = React.createRef<Slider>()
    const settings = {
        dots: false,
        infinite: true,
        arrow: false,
        speed: 1000,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        centerMode: true,

    };
    return (
        <div className="smallCardSlider">
            <div className="arrows d-flex flex-row justify-content-end" >
                <button onClick={() => { sliderRef.current?.slickPrev() }} className='px-3 py-2 m-1' style={{ backgroundColor: '#F2f2f2', borderRadius: '100px', border: 'none' }} >
                    <svg width="12" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 15.5L9.26251 13.7375L3.53751 8L9.26251 2.2625L7.50001 0.5L1.23978e-05 8L7.50001 15.5Z" fill="#8D8D8D" />
                    </svg>
                </button>
                <button onClick={() => { sliderRef.current?.slickNext() }} className='px-3 py-2 m-1' style={{ backgroundColor: '#F2f2f2', borderRadius: '100px', border: 'none' }}>
                    <svg width="12" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.49999 0.5L0.737488 2.2625L6.46249 8L0.737488 13.7375L2.49999 15.5L9.99999 8L2.49999 0.5Z" fill="#8D8D8D" />
                    </svg>
                </button>

            </div>
            <Slider {...settings} ref={sliderRef}>
                {smallcarditems.map((value) => {
                    return (
                        <CardSmall card={value}/>

                    )
                })}

            </Slider>
        </div>
    );

}