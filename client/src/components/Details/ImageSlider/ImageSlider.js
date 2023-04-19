import { useState } from 'react'
import styles from './ImageSlider.module.css'

//import styles from '../Details.module.css'

function ImageSlider({ mainImg, leftImages }) {
    
    let [currentIndex, setCurrentIndex] = useState(0)
    let [images, setImages] = useState([mainImg, ...Object.values(leftImages)])
    let arrLength = images.length


    function nextImage() {
        let newIndex = currentIndex === arrLength - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    function previousImage() {
        let newIndex = currentIndex === 0 ? arrLength - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }



    return (
        <>

            <section className="container">
                <div className={styles['slider-wrapper']}>
                    <div className={styles['slider']}>
                        <img className={styles['img']} id="slide-1" src={images[currentIndex]} alt="image on car" />
                    </div>

                    <p><i onClick={nextImage} className={`${styles['arrow']} ${styles['right']}`}></i></p>
                    <p><i onClick={previousImage} className={`${styles['arrow']} ${styles['left']}`}></i></p>


                </div>
            </section>
        </>
    )
}

export default ImageSlider