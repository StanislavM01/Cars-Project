import { useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import authService from '../../services/authService'
import styles from './Login.module.css'
import formValidation from '../../utils/formValidation'
import { Link, useNavigate } from 'react-router-dom'



function Login() {
    let navigate = useNavigate()
    let { login } = useContext(UserContext)
    let [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    let [errors, setErrors] = useState({
        email: { valid: false, message: '' },
        password: { valid: false, message: '' },

    })

    let validationController = {
        'email': formValidation.email,
        'password': formValidation.password,

    }


    function onChangeHandler(e) {
        let targetName = e.target.name
        let targetValue = e.target.value
        setLoginData(oldData => ({
            ...oldData,
            [targetName]: targetValue
        }))
    }

    async function onSubmitHandler(e) {
        e.preventDefault()
        if (Object.values(errors).every(a => a.valid === true)) {
            try {
                let result = await authService.login(loginData)
                login(result)
                navigate('/')
            }
            catch (err) {
                if (err.message != 'Login or password don\'t match') {
                    alert('Try again later')
                } else {
                    alert(err.message)
                }

            }


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

    return (
        <div className="container-fluid ps-md-0">
            <div className="row">
                <div className={`col-lg-6 ${styles['bg-image']}`}></div>
                <div className="col-lg-6">
                    <div className={`${styles['login']} d-flex align-items-center`}>
                        <div className="container col-md-9">
                            <h3 className={`${styles['login-heading']} mb-4`}>Welcome again!</h3>

                            {/* <!-- Sign In Form --> */}
                            <form onSubmit={onSubmitHandler}>

                                <div className="form-floating mb-3">
                                    <input type="email" name='email' onChange={onChangeHandler} onBlur={errorHandler} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                    {errors.email?.message &&
                                        < p className={styles['error']}>{errors.email.message}</p>
                                    }
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" name='password' onChange={onChangeHandler} onBlur={errorHandler} className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                    {errors.password?.message &&
                                        < p className={styles['error']}>{errors.password.message}</p>
                                    }
                                </div>



                                <div className="d-grid">
                                    <button className={`btn btn-lg btn-primary text-uppercase fw-bold mb-2 ${styles['btn-login']}`} type="submit">Sign in</button>

                                </div>

                            </form>
                            <div className={`${styles['bottom']} text-center mb-5`}>
                                <p href="#" className={`${styles['sm-text']} mx-auto mb-3`}>Don't have an account?</p>
                                <Link className={`btn ${styles['btn-white']}  btn-primary`} to={'/register'}>Create new</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login