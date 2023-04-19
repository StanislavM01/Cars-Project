import styles from "./EditCar.module.css"
import { useEffect, useState, useContext } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import carsService from "../../services/carsService"
import formValidation from "../../utils/formValidation"
import ImagesWithUrlsEdit from "./ImagesWithUrlsEdit/ImagesWithUrlsEdit"
import { UserContext } from '../../contexts/UserContext'


function EditCarOffer() {
    let navigate = useNavigate()
    let { userInfo } = useContext(UserContext)
    let { carData, carId } = useOutletContext()
    let [errors, setErrors] = useState({
        brand: { valid: false, message: '' },
        model: { valid: false, message: '' },
        mileage: { valid: false, message: '' },
        firstRegistration: { valid: false, message: '' },
        price: { valid: false, message: '' },
        description: { valid: false, message: '' },
        mainImg: { valid: false, message: '' },
        secondImg: { valid: false, message: '' },
        thirdImg: { valid: false, message: '' },
        fourthImg: { valid: false, message: '' },
        fifthImg: { valid: false, message: '' },
        sixthImg: { valid: false, message: '' }

    })
    let [carInfo, setCarInfo] = useState({
        brand: '',
        model: '',
        mileage: '',
        description: '',
        firstRegistration: '',
        price: '',
        color: '',
        doors: '',
        gear: '',
        bodyType: '',
        fuelType: '',
        condition: '',
        imageUrls: {
            mainImg: '',
            leftImages: {
                secondImg: '',
                thirdImg: '',
                fourthImg: '',
                fifthImg: '',
                sixthImg: ''
            }
        }
    })

    useEffect(() => {
        for (const key in carInfo) {
            setCarInfo(oldData => ({
                ...oldData,
                [key]: carData[key]
            }))
        }

    }, [])

    function submitHandler(e) {
        e.preventDefault()

        if (Object.values(errors).every(a => a.message.length === 0)) {
            let carData = {
                ...carInfo,
                creatorData: {
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    email: userInfo.email,
                    phone: userInfo.phone
                }
            }


            carsService.editOneCar(carData, carId)
                .then(result => {
                    navigate(`/details/${carId}`)
                })
                .catch(err => {
                    alert('Try again later to edit current car')
                })




        }

    }


    function errorHandler(e) {
        let targetName = e.target.name
        let targetValue = e.target.value

        setErrors(oldData => ({
            ...oldData,
            [e.target.name]: validationController[targetName](targetValue)
        }))

    }

    function onChangeHandler(e) {

        setCarInfo(oldCarInfo => ({
            ...oldCarInfo,
            [e.target.name]: e.target.value
        }))
    }
    function changeImgUrl(e) {
        if (e.target.name === 'mainImg') {
            let newState = { ...carInfo }
            newState.imageUrls.mainImg = e.target.value

            setCarInfo(newState)
        } else {
            let newState = { ...carInfo }
            newState.imageUrls.leftImages[e.target.name] = e.target.value
            setCarInfo(newState)
        }
    }

    let validationController = {
        'brand': formValidation.brand,
        'model': formValidation.model,
        'mileage': formValidation.mileage,
        'firstRegistration': formValidation.firstRegistration,
        'description': formValidation.description,
        'price': formValidation.price,
        'mainImg': formValidation.imageUrl,
        'secondImg': formValidation.imageUrl,
        'thirdImg': formValidation.imageUrl,
        'fourthImg': formValidation.imageUrl,
        'fifthImg': formValidation.imageUrl,
        'sixthImg': formValidation.imageUrl,

    }

    return (
        < div className={styles['testbox']} >
            <form className={styles['form']} onSubmit={submitHandler} >
                <div className={styles['banner']}>
                    <h1 className={styles['h1']}>Edit your car offer</h1>
                </div>
                <div className={styles['colums']}>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="brand">Brand<span>*</span></label>
                        <input className={styles['input']} onBlur={errorHandler} onChange={onChangeHandler} value={carInfo.brand} id="brand" type="text" name="brand" required />
                        {errors.brand?.message &&
                            <p className={styles['error']}>{errors.brand?.message}</p>
                        }

                    </div>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="model">Model<span>*</span></label>
                        <input className={styles['input']} onBlur={errorHandler} onChange={onChangeHandler} value={carInfo.model} id="model" type="text" name="model" required />
                        {errors.model?.message &&
                            <p className={styles['error']}>{errors.model?.message}</p>
                        }
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="mileage">Mileage<span>*</span></label>
                        <input className={styles['input']} onBlur={errorHandler} onChange={onChangeHandler} value={carInfo.mileage} id="mileage" type="text" name="mileage" required />
                        {errors.mileage?.message &&
                            <p className={styles['error']}>{errors.mileage?.message}</p>
                        }
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="firstRegistration">First Registration<span>*</span></label>
                        <input className={styles['input']} onBlur={errorHandler} onChange={onChangeHandler} value={carInfo.firstRegistration} id="firstRegistration" type="text" name="firstRegistration" required />
                        {errors.firstRegistration?.message &&
                            <p className={styles['error']}>{errors.firstRegistration?.message}</p>
                        }
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="gear">Gear<span>*</span></label>
                        <select className={`${styles['select-style']} ${styles['select']}`} value={carInfo.gear} onChange={onChangeHandler} id="gear" name="gear">
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                        </select>
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="bodyType">Body Type<span>*</span></label>
                        <select className={`${styles['select-style']} ${styles['select']}`} onChange={onChangeHandler} value={carInfo.bodyType} id="bodyType" name="bodyType">
                            <option value="Coupe">Coupe</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Convertible">Convertible</option>
                            <option value="Compact">Compact</option>
                            <option value="Station Wagon">Station Wagon</option>
                        </select>

                    </div>

                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="fuelType">Fuel Type<span>*</span></label>
                        <select className={`${styles['select-style']} ${styles['select']}`} onChange={onChangeHandler} value={carInfo.fuelType} id="fuelType" name="fuelType">
                            <option value="Gasoline">Gasoline</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>

                    </div>

                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="color">Color<span>*</span></label>
                        <select className={`${styles['select-style']} ${styles['select']}`} onChange={onChangeHandler} value={carInfo.color} id="color" name="color">
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Orange">Orange</option>
                            <option value="White">White</option>
                            <option value="Purple">Purple</option>
                            <option value="Gray">Gray</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Black">Black</option>
                            <option value="Brown">Brown</option>
                        </select>
                    </div>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="doors">Doors<span>*</span></label>
                        <select className={`${styles['select-style']} ${styles['select']}`} onChange={onChangeHandler} value={carInfo.doors} id="doors" name="doors">
                            <option value="2/3">2/3</option>
                            <option value="4/5">4/5</option>
                            <option value="6/7">6/7</option>
                        </select>

                    </div>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="condition">Condition<span>*</span></label>
                        <select className={`${styles['select-style']} ${styles['select']}`} onChange={onChangeHandler} value={carInfo.condition} id="condition" name="condition">
                            <option value="Used">Used</option>
                            <option value="New">New</option>

                        </select>

                    </div>
                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="description">Description<span>*</span></label>
                        <textarea className={styles['textarea']} name="description" onBlur={errorHandler} onChange={onChangeHandler} value={carInfo.description} id="description" cols="30" rows="10" required></textarea>
                        {errors.description?.message &&
                            <p className={styles['error']}>{errors.description?.message}</p>
                        }
                    </div>

                    <div className={styles['item']}>
                        <label className={styles['label']} htmlFor="price">Price<span>*</span></label>
                        <input className={styles['input']} onBlur={errorHandler} onChange={onChangeHandler} value={carInfo.price} id="price" type="text" name="price" required />
                        {errors.price?.message &&
                            <p className={styles['error']}>{errors.price?.message}</p>
                        }
                    </div>


                </div>

                <ImagesWithUrlsEdit {...carInfo.imageUrls} changeImgUrl={changeImgUrl} errorHandler={errorHandler} errors={errors} />


                <div className={styles['btn-block']}>
                    <button className={styles['button']} type="submit" >Edit Offer</button>
                </div>
            </form >
        </div >
    )
}

export default EditCarOffer