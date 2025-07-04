import React from 'react'
import styles from './Slider.module.css'

type SliderProps = {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) =>{
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  return (
    <div className={styles.slider}>
        <button className={styles.prev} onClick={prevSlide}>Prev</button>
       
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        
        <button className={styles.next} onClick={nextSlide}>Next</button>
    </div>
  )
}
export default Slider;