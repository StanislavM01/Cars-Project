import { useState } from 'react'
import styles from './SearchBar.module.css'

function SearchBar({ changeFilterOptions }) {
   

    let defaultState = {
        condition: 'default',
        brand: 'default',
        bodyType: 'default',
        fuelType: 'default',
        gear: 'default',
    }
    let [fillter, setFillter] = useState(defaultState)



    function onChangeHandler(e) {
        let targetName = e.target.name
        let targetValue = e.target.value
        setFillter(oldData => ({
            ...oldData,
            [targetName]: targetValue

        }))
    }

    function onClickHandler() {
        changeFilterOptions(fillter)
    }

    function resetFilters() {
        setFillter(defaultState)
        changeFilterOptions(defaultState)
    }


    return (

        <section className={`${styles['round-corner']} search-banner bg-danger text-white`} id="search-banner">
            <div className="container py-5 my-5">
                <div className="row text-center pb-4">
                    <div className="col-md-12">
                        <h2>Find your car</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" onChange={onChangeHandler} name='condition' value={fillter.condition} className="form-control">
                                                <option value='default' disabled >Select New/Used</option>
                                                <option value={'New'}>New</option>
                                                <option value={'Used'}>Used</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" value={fillter.brand} name='brand' onChange={onChangeHandler} className="form-control">
                                                <option value={'default'} disabled>Select Make</option>
                                                <option value={'BMW'}>BMW</option>
                                                <option value={'Audi'}>Audi</option>
                                                <option value={'Mercedes'}>Mercedes</option>
                                                <option value={'Tesla'}>Tesla</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" onChange={onChangeHandler} name='bodyType' value={fillter.bodyType} className="form-control">
                                                <option value={'default'} disabled>Select Body Type</option>
                                                <option value={'Coupe'} >Coupe</option>
                                                <option value={'Sedan'} >Sedan</option>
                                                <option value={'Convertible'} >Convertible</option>
                                                <option value={'Compact'} >Compact</option>
                                                <option value={'stationWagon'} >Station Wagon</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" onChange={onChangeHandler} name='fuelType' value={fillter.fuelType} className="form-control">
                                                <option value={'default'} disabled>Select Fuel Type</option>
                                                <option value={'Gasoline'}>Gasoline</option>
                                                <option value={'Diesel'}>Diesel</option>
                                                <option value={'Electric'}>Electric</option>
                                                <option value={'Hybrid'}>Hybrid</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group ">
                                            <select id="inputState" onChange={onChangeHandler} name='gear' value={fillter.gear} className="form-control">
                                                <option value={'default'} disabled>Select Gear</option>
                                                <option value={'Automatic'}>Automatic</option>
                                                <option value={'Manual'}>Manual</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="button" onClick={onClickHandler} className="btn btn-dark">Search Car</button>
                                        <button type="button" onClick={resetFilters} className="btn-close" aria-label="Close"></button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SearchBar