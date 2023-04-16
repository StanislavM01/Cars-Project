import styles from './Catalog.module.css'
import CarCardCatalog from './CarCardCatalog/CarCardCatalog';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import carsService from '../../services/carsService';

function Catalog() {
    let [filterOptions, setFilterOptions] = useState({})
    let [currentPage, setCurrentPage] = useState(1)
    let [countPages, setcountPages] = useState(1)
    let [carsInfo, setCarsInfo] = useState([])

    useEffect(() => {
        let carsOnPage = 8
        let carsToSkip = currentPage === 1 ? 0 : (currentPage - 1) * carsOnPage
        carsService.getCarsOnCurrentPage(carsToSkip, carsOnPage, filterOptions)
            .then(result => {

                setCarsInfo(result)
            })
            .catch(err => {
                alert('Try again later to reload current page')
            })
    }, [currentPage, filterOptions])

    useEffect(() => {
        carsService.getCountOfAllCars(filterOptions)
            .then(result => {
                setcountPages(Math.ceil(result / 8))
            })
    }, [carsInfo])

    function changeCurrentPage(pageNumber) {
        setCurrentPage(pageNumber)
    }

    function deleteCarfromState(deletedCarId) {
        if (currentPage > 1 && carsInfo.length === 1) {
            setCarsInfo(oldData => oldData.filter(a => a._id != deletedCarId))
            changeCurrentPage(currentPage - 1)

        } else {
            setCarsInfo(oldData => oldData.filter(a => a._id != deletedCarId))
        }


    }


    function changeFilterOptions(filters) {
        setCurrentPage(1)
        setFilterOptions(filters)

    }




    return (
        <div className="container pb-5 mt-n2 mt-md-n3">
            <div className="row">
                <div className={`${styles['custom']} col-xl-9 col-md-8`}>
                    <SearchBar changeFilterOptions={changeFilterOptions} />
                    {carsInfo.length >= 1
                        ?
                        <>
                            {carsInfo.map(carData => <CarCardCatalog key={carData._id} {...carData} deleteCarfromState={deleteCarfromState} />)}
                            <Pagination changeCurrentPage={changeCurrentPage} currentPage={currentPage} filterOptions={filterOptions} countPages={countPages} />
                        </>
                        :
                        <h3>Not matches found</h3>
                    }

                </div>
            </div>
        </div >
    );
}



export default Catalog