import Slider from "react-slick";
import { Hero } from "../../hero/hero"
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import React from "react";
import { heropageitems } from "../../../data/heropageitems";

export const HeroSlider: React.FC = (props) => {

    // const sliderRef = React.useRef<HTMLDivElement>();
    const sliderRef = React.createRef<Slider>()
    // const sliderRef = React.createRef()
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'ease-in-out'
    };
    return (

        <div className="">

            <Slider {...settings} ref={sliderRef} >
                {/* <div>
                    <Hero />
                </div>
                <div>
                    <Hero />
                </div>
                <div>
                    <Hero />
                </div>
                <div>
                    <Hero />
                </div>
                <div>
                    <Hero />
                </div> */}
                {heropageitems.map((value) => {
                    return (
                        <div>
                            <Hero image={value.image} card={value}/>
                        </div>
                    )

                })}
            </Slider>


            <div className="arrows d-flex flex-row px-5" style={{ position: 'relative', top: '-80px' }} >
                <button onClick={() => { sliderRef.current?.slickPrev() }} className='px-3 py-2 m-1' style={{ backgroundColor: '#FFFFFF', borderRadius: '100px', border: 'none' }} >
                    <svg width="12" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50001 15.5L9.26251 13.7375L3.53751 8L9.26251 2.2625L7.50001 0.5L1.23978e-05 8L7.50001 15.5Z" fill="#8D8D8D" />
                    </svg>
                </button>
                <button onClick={() => { sliderRef.current?.slickNext() }} className='px-3 py-2 m-1' style={{ backgroundColor: '#FFFFFF', borderRadius: '100px', border: 'none' }}>
                    <svg width="12" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.49999 0.5L0.737488 2.2625L6.46249 8L0.737488 13.7375L2.49999 15.5L9.99999 8L2.49999 0.5Z" fill="#8D8D8D" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

