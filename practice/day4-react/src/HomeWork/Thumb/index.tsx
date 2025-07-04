import React, { useState } from 'react'
import styles from './Thumb.module.css'

type ImageItem = {
    id: number,
    url: string,
}
const images: ImageItem[] = [
    { id: 1, url: 'images/1.jpg' },
    { id: 2, url: 'images/2.jpg' },
    { id: 3, url: 'images/3.jpg' },
    { id: 4, url: 'images/4.jpg' },
    { id: 5, url: 'images/5.jpg' },
    { id: 6, url: 'images/6.jpg' },
];

export default function index() {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const prev = () =>
        setCurrentImage((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () =>
        setCurrentImage((i) => (i === images.length - 1 ? 0 : i + 1));
    const goTo = (index: number) => setCurrentImage(index);
    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.main}>
                    <button className="nav prev" onClick={prev}>‹</button>
                    <img src={images[currentImage].url} />
                    <button className="nav next" onClick={next}>›</button>
                </div>
                <div className={styles.thumbs}>
                    {images.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.url}
                            onClick={() => goTo(index)}
                            className={`${styles.thumb} ${index === currentImage ? styles.active : ''}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}