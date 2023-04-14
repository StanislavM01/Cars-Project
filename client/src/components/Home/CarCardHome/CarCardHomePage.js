import styles from '../Home.module.css'
import { Link } from 'react-router-dom'
function CarCardHomePage({
    firstRegistration,
    price,
    mileage,
    brand,
    model,
    condition,
    imageUrls,
    _id
}) {
    return (
        <div className={styles['entire-car-card']}>
            <div className="card rounded">
                <div className="card-image">

                    <span className={styles['card-notify-year']}>{firstRegistration}</span>
                    <img className={styles['responsive']} src={imageUrls.mainImg} alt="Alternate Text" />
                </div>
                <div className={`${styles['card-image-overlay']} m-auto`}>
                    <span className={styles['card-detail-badge']}>{condition}</span>
                    <span className={styles['card-detail-badge']}>${price}</span>
                    <span className={styles['card-detail-badge']}>{mileage} Kms</span>
                </div>
                <div className="card-body text-center">
                    <div className={`${styles['ad-title']} m-auto`}>
                        <h5>{`${brand} ${model}`}</h5>
                    </div>
                    <Link className={styles['ad-btn']} to={`/details/${_id}`}>View</Link>
                </div>
            </div>
        </div>
    )
}

export default CarCardHomePage