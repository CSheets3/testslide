import React, {useState} from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length;

// moves the slider to the right
const  nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
};

// moves the slider to the left
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}


    return (
        <section>
        <div className='slider'>
            <FaArrowAltCircleLeft className="lefty" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="righty"  onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                <div>     {/* you could probably condense this section*/}
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="planet" className="planets"/>)}
                        {index === current && (<h1 className={'pnames'}>{slide.name}</h1>)}
                        {index === current && (<p className={'facts'}>{slide.fact}</p>)} 
                    </div>
                </div>
                );
            })}
        </div>
        </section>
    );
};
 
export default ImageSlider
