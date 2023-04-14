import styles from './MyProfile.module.css'
import { useContext, useEffect, useState } from 'react'
import carsService from '../../services/carsService'
import { UserContext } from '../../contexts/UserContext'
import CarCardMyProfile from './CarCardMyProfile/CarCardMyProfile'
import Pagination from '../Pagination/Pagination'

function MyProfile() {
    let [currentPage, setCurrentPage] = useState(0)
    let [countPages, setcountPages] = useState(1)
    let [isDeletedCar, setIsDeletedCar] = useState(false)
    let [carsInfo, setCarsInfo] = useState([])
    let { userInfo } = useContext(UserContext)
    let userId = userInfo._id

    useEffect(() => {
        let carsOnPage = 8
        let carsToSkip = currentPage === 0 ? 0 : currentPage * carsOnPage
        carsService.getUserCarsOnCurrentPage(carsToSkip, carsOnPage, userId)
            .then(result => {
                setCarsInfo(result)
            })
            .catch(err => {
                alert('Try again later to reload your profile')
            })
    }, [currentPage,isDeletedCar])

    useEffect(() => {
        carsService.getCountOfUserCars(userId)
            .then(result => {
                setcountPages(Math.ceil(result / 8))
            })
    }, [carsInfo])

    function deleteCarfromState() {
        if (currentPage >= 1 && carsInfo.length === 1) {
            changeCurrentPage(currentPage - 1)
        } else {
            setIsDeletedCar(!isDeletedCar)
        }
    }

    function changeCurrentPage(pageNumber) {
        setCurrentPage(pageNumber)

    }

    return (
        <div className=" ">
            <div className={`${styles['my-profile']} card mb-4`}>
                <div className="card-body text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                    <h5 className="my-3">{userInfo.firstName} {userInfo.lastName}</h5>
                    <p className="text-muted mb-1">Email: {userInfo.email}</p>
                    <p className="text-muted mb-4">Phone: {userInfo.phone}</p>

                </div>
            </div>
            <div className="row">
                <div className={`${styles['custom']} ${styles['my-car-offers']} col-xl-9 col-md-8`}>

                    {carsInfo.length >= 1
                        ?
                        <>
                            {carsInfo.map(carData => <CarCardMyProfile key={carData._id} {...carData} deleteCarfromState={deleteCarfromState} />)}
                            <Pagination changeCurrentPage={changeCurrentPage} currentPage={currentPage} countPages={countPages} />
                        </>
                        :
                        <h3>Current user dont have car offers</h3>
                    }

                </div>
            </div>
        </div >

    )


}


export default MyProfile