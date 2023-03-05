import React, { useRef, useEffect } from 'react'
import { ImageObject } from './ImageObject.js'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const SliderHeader = () => {
    const nextBtnRef = useRef()

    function sliderRightClick(handler) {
        const slider = nextBtnRef.current.closest('.slider').querySelector('.slider-container')
        const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))
        const itemsCount = slider.children.length 
        
        if(handler === 'leftHandler') {
            if(sliderIndex - 1 < 0) {
                slider.style.setProperty('--slider-index', itemsCount - 1)
            } else {
                slider.style.setProperty('--slider-index', sliderIndex - 1)
            }
        }

        if(handler === 'rightHandler') {
            if(sliderIndex + 1 >= itemsCount) {
                slider.style.setProperty('--slider-index', 0)
            } else {
                slider.style.setProperty('--slider-index', sliderIndex + 1)
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            sliderRightClick('rightHandler')
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    function progressBarHandler(index) {
        const slider = nextBtnRef.current.closest('.slider').querySelector('.slider-container')
        slider.style.setProperty('--slider-index', index)
    }
    
    return (
        <React.Fragment>
            <div className='container'>
                <div className='slider'>
                    <div className='slider-prev' onClick={() => sliderRightClick("leftHandler")}>
                        <GrFormPrevious />
                    </div>
                    
                    <div className='slider-container'>
                        {ImageObject && ImageObject.map((obj, index) => {
                            return(
                            <div className='slider-image' key={index} >
                                <input type="image" img="true"  src={require(`../../static/image/${obj.src}`)} alt="logo" className="slider-images" />
                            </div>
                            )
                        })}
                    </div>
                        
                    <div className='slider-next' onClick={() => sliderRightClick("rightHandler")} ref={nextBtnRef}>
                        <GrFormNext />
                    </div>
                </div>

                <div className='progress'>
                    <div className='progress-container'>
                        {ImageObject && ImageObject.map((obj, index) => {
                            return(
                            <div className='progress-images' key={index} >
                                <input type="image" img="true"  src={require(`../../static/image/${obj.src}`)} alt="logo" className="progress-image active" onClick={() => progressBarHandler(index)} />
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SliderHeader