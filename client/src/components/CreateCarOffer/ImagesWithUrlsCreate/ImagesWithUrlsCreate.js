import { useState } from 'react'
import styles from './ImagesWithUrlsCreate.module.css'

function ImagesWithtUrlsCreate({ mainImg,leftImages, changeImgUrl, errorHandler, errors }) {


    return (
        <>
            <div className={styles['main-div-img']}>
                <div className={`${styles['item']} ${styles['div-with-image']}`}>
                    <div className={styles['decrease-width']} >
                        <label htmlFor="mainImg">First Image Url<span>*</span></label>
                        <input className={styles['input']} onChange={changeImgUrl} onBlur={errorHandler} value={mainImg} id="mainImg" type="text" name="mainImg"required/>
                        {errors.mainImg?.message &&
                            <p className={styles['error']} >{errors.mainImg?.message}</p>
                        }
                    </div>

                    <div className={`${styles['size-image']} card`} >
                        <img src={mainImg} className={styles['img']} alt="first image" />

                    </div>
                </div>

                <div className={`${styles['item']} ${styles['div-with-image']}`}>
                    <div className={styles['decrease-width']}>
                        <label htmlFor="secondImg">Second Image Url<span>*</span></label>
                        <input className={styles['input']} onChange={changeImgUrl} onBlur={ errorHandler } value={leftImages.secondImg} id="secondImg" type="text" name="secondImg" required />
                        {errors.secondImg?.message &&
                            <p className={styles['error']} >{errors.secondImg?.message}</p>
                        }
                    </div>

                    <div className={`${styles['size-image']} card`} >
                        <img src={leftImages.secondImg} className={styles['img']} alt="first image" />

                    </div>
                </div >
                <div className={`${styles['item']} ${styles['div-with-image']}`}>
                    <div className={styles['decrease-width']}>
                        <label htmlFor="thirdImg">Third Image Url<span>*</span></label>
                        <input className={styles['input']} onChange={changeImgUrl} onBlur={ errorHandler } value={leftImages.thirdImg} id="thirdImg" type="text" name="thirdImg" required />
                        {errors.thirdImg?.message &&
                            <p className={styles['error']} >{errors.thirdImg?.message}</p>
                        }
                    </div>

                    <div className={`${styles['size-image']} card`} >
                        <img src={leftImages.thirdImg} className={styles['img']} alt="first image" />

                    </div>
                </div>

            </div>

            <div className={styles['main-div-img']}>
                <div className={`${styles['item']} ${styles['div-with-image']}`}>
                    <div className={styles['decrease-width']} >
                        <label htmlFor="fourthImg">Fourth Image Url<span>*</span></label>
                        <input className={styles['input']} onChange={changeImgUrl} onBlur={ errorHandler } value={leftImages.fourthImg} id="fourthImg" type="text" name="fourthImg" required />
                        {errors.fourthImg?.message &&
                            <p className={styles['error']} >{errors.fourthImg?.message}</p>
                        }
                    </div>

                    <div className={`${styles['size-image']} card`} >
                        <img src={leftImages.fourthImg} className={styles['img']} alt="first image" />

                    </div>
                </div>

                <div className={`${styles['item']} ${styles['div-with-image']}`}>
                    <div className={styles['decrease-width']}>
                        <label htmlFor="fifthImg">Fifth Image Url</label>
                        <input className={styles['input']} onBlur={changeImgUrl} id="fifthImg" onChange={changeImgUrl} value={leftImages.fifthImg} type="text" name="fifthImg" />
                    </div>

                    <div className={`${styles['size-image']} card`} >
                        <img src={leftImages.fifthImg} className={styles['img']} alt="first image" />

                    </div>
                </div >
                <div className={`${styles['item']} ${styles['div-with-image']}`}>
                    <div className={styles['decrease-width']}>
                        <label htmlFor="sixthImg">Sixth Image Url</label>
                        <input className={styles['input']} onBlur={changeImgUrl} onChange={changeImgUrl} value={leftImages.sixthImg} id="sixthImg" type="text" name="sixthImg" />
                    </div>

                    <div className={`${styles['size-image']} card`} >
                        <img src={leftImages.sixthImg} className={styles['img']} alt="first image" />

                    </div>
                </div>



            </div>
        </>
    )
}

export default ImagesWithtUrlsCreate