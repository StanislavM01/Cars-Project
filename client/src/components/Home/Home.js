import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import carsService from '../../services/carsService'
import CarCardHomePage from './CarCardHome/CarCardHomePage'

function Home() {

    let [carsInfo, setCarsInfo] = useState([])
    useEffect(() => {

        carsService.getSixCars()
            .then(result => {
                setCarsInfo(result)
            })
            .catch(err => {
                alert('Try again later to reload current page')
            })

    }, [])
 
    return (
        <div className={styles['font-body']}>
            <header className={styles['masthead']}>
            </header>

            <div className={`${styles['padding-top']} container`}>

                <h4 className={styles['custom-style-header']}>Six of our best offers</h4>

                <div className="row" id={styles['ads']}>
                    {/* <!-- Category Card --> */}

                    {carsInfo.map(carData => <CarCardHomePage key={carData._id} {...carData} />)}

                </div>

            </div >

        </div>
    )
}

export default Home