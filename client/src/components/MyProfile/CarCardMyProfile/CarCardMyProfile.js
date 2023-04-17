import styles from './CarCardMyProfile.module.css'
import { Link } from 'react-router-dom'
import carsService from '../../../services/carsService'

function CarCardMyProfile({
    brand,
    model,
    color,
    doors,
    gear,
    mileage,
    bodyType,
    fuelType,
    firstRegistration,
    price,
    imageUrls,
    _id,
    deleteCarfromState

}) {



    function deleteHandler() {
        let text = 'Do you sure to delete this car offer ?'

        if (window.confirm(text)) {
            carsService.deleteOneCar(_id)
                .then(result => {
                    deleteCarfromState(_id)
                })
                .catch(err => {
                    alert('Try again later to delete this car')
                })
        }
    }

    return (
        <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
            <div className="media d-block d-sm-flex text-center text-sm-left">
                <Link className={`${styles['cart-item-thumb']} mx-auto mr-sm-4`} to={`/details/${_id}`}><img className={styles['cart-item-thumb>img']} src={imageUrls.mainImg} alt="Product" /></Link>
                <div className="media-body pt-3">
                    <h3 className={`${styles['product-card-title']} ${styles['font-weight-semibold']} border-0 pb-0`}><Link to={`/details/${_id}`}>{brand}</Link></h3>
                    <div className={styles['group-all-columns']}>
                        <div className={`column ${styles['move-on-right']}`}>
                            <div className="font-size-sm"><span className={`${styles['text-muted']} mr-2`}>Model:</span>{model}</div>
                            <div className="font-size-sm"><span className={`${styles['text-muted']} mr-2`}>Color:</span>{color}</div>
                            <div className="font-size-sm"><span className={`${styles['text-muted']} mr-2`}>Doors:</span>{doors}</div>
                            <div className="font-size-sm"><span className={`${styles['text-muted']} mr-2`}>Gear:</span>{gear}</div>
                        </div>
                        <div className='column'>
                            <div className="font-size-sm"><span className={`${styles['text-muted']} mr-2`}>Mileage:</span>{mileage} km</div>
                            <div className="font-size-sm"><span className={`${styles['text-muted']} mr-2`}>Body type:</span>{bodyType}</div>
                            <div className="font-size-sm"><span className={`${styles['text-muted']} mr-2`}>Fuel type:</span>{fuelType}</div>
                            <div className="font-size-sm"><span className={`${styles['text-muted']} mr-2`}>First registration:</span>{firstRegistration}</div>
                        </div>
                    </div>
                    <div className="font-size-lg text-primary pt-2">${price}.00</div>
                </div>
            </div>

            <div className="pt-2  pl-sm-3 mx-auto  text-center text-sm-left" style={{ maxWidth: '10rem' }}>
                <Link to={`/edit/${_id}`} className="btn btn-outline-secondary btn-sm btn-block mb-2" >
                    Edit Offer
                </Link>
                <button to={`/delete/${_id}`} onClick={deleteHandler} className="btn btn-outline-danger btn-sm btn-block mb-2" type='button' >
                    Remove
                </button>
            </div>



        </div>
    )
}

export default CarCardMyProfile