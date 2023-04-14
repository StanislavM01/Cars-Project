import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../services/authService'
import styles from './Register.module.css'
import { UserContext } from '../../contexts/UserContext'
import formValidation from '../../utils/formValidation'


function Register() {
    let { login } = useContext(UserContext)
    let navigate = useNavigate()
    let [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repPassword: '',
        phone: '',

    })
    let [errors, setErrors] = useState({
        firstName: { valid: false, message: '' },
        lastName: { valid: false, message: '' },
        email: { valid: false, message: '' },
        password: { valid: false, message: '' },
        repPassword: { valid: false, message: '' },
        phone: { valid: false, message: '' },
    })

    let validationController = {
        'firstName': formValidation.firstName,
        'lastName': formValidation.lastName,
        'email': formValidation.email,
        'password': formValidation.password,
        'repPassword': formValidation.repPassword,
        'phone': formValidation.phone,
    }

    function onChangeHandler(e) {
        let targetName = e.target.name
        let targetValue = e.target.value
        setRegisterData(oldData => ({
            ...oldData,
            [targetName]: targetValue
        }))
    }
    async function onSubmitHandler(e) {
        e.preventDefault()
        if (Object.values(errors).every(a => a.valid === true)) {
            try {
                let result = await authService.register({
                    firstName: registerData.firstName,
                    lastName: registerData.lastName,
                    email: registerData.email,
                    password: registerData.password,
                    phone: registerData.phone
                })
                login(result)
                navigate('/')
            }
            catch (err) {
                if (err.message === 'Login or password don\'t match') {
                    alert(err.message)
                } else if (err.message.includes('A user with the same')) {
                    alert(err.message)
                } else {
                    alert('Try again later')
                }
            }


        }

    }

    function errorHandler(e) {
        let targetName = e.target.name
        let targetValue = e.target.value

        setErrors(oldData => ({
            ...oldData,
            [e.target.name]: targetName != 'repPassword'
                ? validationController[targetName](targetValue)
                : validationController[targetName](targetValue, registerData.password)
        }))

    }

    return (
        <div className="container-fluid ps-md-0">
            <div className="row">
                <div className={`col-lg-6 ${styles['bg-image']}`}></div>
                <div className="col-lg-6">
                    <div className={`${styles['login']} d-flex align-items-center`}>
                        <div className="container col-md-9">
                            <h3 className={`${styles['login-heading']} mb-4`}>Register Form</h3>
                            <form onSubmit={onSubmitHandler}>
                                <div className="form-floating mb-3">
                                    <input type="text" name='firstName' className="form-control" id="firstName" onBlur={errorHandler} onChange={onChangeHandler} value={registerData.firstName} />
                                    <label htmlFor="firstName">First Name</label>
                                    {errors.firstName?.message &&
                                        < p className={styles['error']}>{errors.firstName.message}</p>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name='lastName' id="lastName" onChange={onChangeHandler} onBlur={errorHandler} value={registerData.lastName} />
                                    <label htmlFor="lastName">Last Name</label>
                                    {errors.lastName?.message &&
                                        < p className={styles['error']}>{errors.lastName.message}</p>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" name='email' id="email" onChange={onChangeHandler} onBlur={errorHandler} value={registerData.email} />
                                    <label htmlFor="email">Email address</label>
                                    {errors.email?.message &&
                                        < p className={styles['error']}>{errors.email.message}</p>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" name='password' id="password" onChange={onChangeHandler} onBlur={errorHandler} value={registerData.password} />
                                    <label htmlFor="password">Password</label>
                                    {errors.password?.message &&
                                        < p className={styles['error']}>{errors.password.message}</p>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" name='repPassword' id="repPassword" onChange={onChangeHandler} onBlur={errorHandler} value={registerData.repPassword} />
                                    <label htmlFor="repPassword">Repeat Password</label>
                                    {errors.repPassword?.message &&
                                        < p className={styles['error']}>{errors.repPassword.message}</p>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="phone" className="form-control" name='phone' id="phone" onChange={onChangeHandler} onBlur={errorHandler} value={registerData.phone} />
                                    <label htmlFor="phone">Phone</label>
                                    {errors.phone?.message &&
                                        < p className={styles['error']}>{errors.phone.message}</p>
                                    }

                                </div>


                                <div className="d-grid">
                                    <button className={`btn btn-lg btn-primary text-uppercase fw-bold mb-2 ${styles['btn-login']}`} type="submit">Register</button>

                                </div>

                            </form>
                            <div className={`${styles['bottom']} text-center mb-5`}>
                                <p href="#" className={`${styles['sm-text']}`}>Have already an account ?</p>
                                <Link className={`btn ${styles['btn-white']}  btn-primary`} to={`/login`}>Login here</Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Register