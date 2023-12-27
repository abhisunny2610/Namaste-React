import React, { useEffect, useState } from 'react'

const Carousel = ({ image }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevious = () => {
        setCurrentIndex((preIndex) => (preIndex === 0) ? image.length - 1 : preIndex - 1)
    }

    const handleNext = () => {
        setCurrentIndex((preIndex) => (preIndex + 1) % image.length)
    }

    useEffect(()=>{

        const interval = setInterval(handleNext, 5000)

        return () => {
            clearInterval(interval)
        }

    }, [currentIndex])



    return (
        <>
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <img src={image[currentIndex]} alt=""  width="200px" />
                <button onClick={handleNext}>Next</button>
            </div>

        </>
    )
}

export default Carousel