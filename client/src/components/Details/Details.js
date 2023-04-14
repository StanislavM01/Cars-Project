import styles from './Details.module.css'
import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import carsService from '../../services/carsService';
import ImageSlider from './ImageSlider/ImageSlider';
import { UserContext } from '../../contexts/UserContext';



function Details() {
    let { userInfo } = useContext(UserContext)
    let userId = userInfo._id
    let navigate = useNavigate()
    let { carId } = useParams()
    let [carInfo, setCarInfo] = useState({})
    let isOwner = carInfo._ownerId === userId

    useEffect(() => {
        carsService.getOneCar(carId)
            .then(carData => {
                setCarInfo(oldData => carData)
            })
            .catch(err => {
                alert('Try again later to reload current page')
            })

    }, [])

    function deleteHandler() {
        let text = 'Do you sure to delete this car offer ?'

        if (window.confirm(text)) {
            carsService.deleteOneCar(carId)
                .then(result => {
                    navigate('/catalog')
                })
                .catch(err => {
                    alert('Try again later to delete this car')
                })
        }
    }

    return (

        <div className={`${styles['gray-bg']} ${styles['blog-single']}`}>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-8 m-15px-tb">
                        <article className={styles['article']}>

                            <h1>{carInfo.brand}</h1>

                            {carInfo.imageUrls &&
                                <ImageSlider {...carInfo.imageUrls} />
                            }

                            <div className={`${styles['article-content']} ${styles['padding-top']}`}>
                                <h4>Description</h4>
                                <p className={styles['p']}>{carInfo.description}</p>


                            </div>

                        </article>

                    </div>
                    <div className={`col-lg-4 m-15px-tb ${styles['blog-aside']}`}>

                        {/* Author */}

                        <div className={`${styles['widget']} ${styles['widget-author']}`}>
                            <div className={styles['widget-title']}>
                                <h3 className={styles['h3']}>Author</h3>
                            </div>
                            <div className={styles['widget-body']}>
                                <div className={`${styles['media']} ${styles['size-author-text']}  align-items-center`} >
                                    <div className={styles['avatar']}>
                                        <img className={styles['img']} src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                    </div>
                                    <div className={`${styles['media-body']} ${styles['author-info']}`}>
                                        <p className={styles['p']}>Fullname: {carInfo.creatorData?.firstName} {carInfo.creatorData?.lastName} </p>
                                        <p className={styles['p']}>Email: {carInfo.creatorData?.email}</p>
                                        <p className={styles['p']}>Phone: {carInfo.creatorData?.phone} </p>
                                    </div>

                                </div>

                            </div>
                        </div>



                        <section >
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="bg-white">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th className={styles['th-style']} colSpan="2" >Car information</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>Model</th>
                                                    <td>{carInfo.model}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>Color</th>
                                                    <td>{carInfo.color}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>Doors</th>
                                                    <td>{carInfo.doors}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>Gear</th>
                                                    <td>{carInfo.gear}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>Mileage</th>
                                                    <td>{carInfo.mileage}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>Body Type</th>
                                                    <td>{carInfo.bodyType}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>Fuel Type</th>
                                                    <td>{carInfo.fuelType}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>First Registration</th>
                                                    <td>{carInfo.firstRegistration}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{ color: '#666666' }}>Price</th>
                                                    <td>{`$${carInfo.price}`}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </section>
                        {isOwner &&
                            <div className="pt-2 text-center" style={{ maxWidth: '10rem' }}>
                                <Link className="btn btn-outline-secondary btn-sm btn-block" to={`/edit/${carId}`} > Edit Offer </Link>
                                <button className="btn btn-outline-danger btn-sm btn-block" onClick={deleteHandler} >
                                    Remove
                                </button>
                            </div>
                        }

                    </div>
                </div>
            </div >
        </div >
    );




}


export default Details