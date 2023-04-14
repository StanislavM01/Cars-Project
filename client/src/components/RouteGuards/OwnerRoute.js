import { useContext, useEffect, useState } from "react";
import { useParams, Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import carsService from "../../services/carsService";


function OwnerRoute() {
    let [carData, setCarData] = useState({})
    let [isLoading, setIsLoading] = useState(true)
    let { userInfo } = useContext(UserContext)
    let { carId } = useParams()

    useEffect(() => {
        carsService.getOneCar(carId)
            .then(carData => {
                setCarData(carData)
                setIsLoading(false)

            })
            .catch(err => {
                alert('Try again to reload current page')
            })

    }, [carId])

    if (isLoading) {

        return (
            <h3>The current page is loading...</h3>
        )

    } else {

        if (carData._ownerId === userInfo._id) {

            return (
                <Outlet context={{carData}} />
            )

        } else {

            return (
                <Navigate to={'/'} />
            )
        }
    }




}

export default OwnerRoute