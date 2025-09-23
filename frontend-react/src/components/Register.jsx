import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [user, setUser] = useState({
        "first_name" : '',
        "last_name" : '',
        "username" : '',
        "email" : '',
        "password" : '',
        "confirm_password" : '',
    })

    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', user)
            setErrors({})
            setSuccess(true)
        } catch(error) {
            setErrors(error.response.data)
            setSuccess(false)
        } finally {
            setLoading(false)
        }
    }

  return (
    <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 bg-light-dark rounded p-5'>
                    <h3 className='text-center mb-4'>Create an Account</h3>
                    <form onSubmit={handleRegistration}>
                        <input className='form-control mb-3' name="first_name" type="text" placeholder='First name' value={user.first_name} onChange={handleChange}/>
                        <input className='form-control mb-3' name="last_name" type="text" placeholder='Last name' value={user.last_name} onChange={handleChange}/>
                        <div className='mb-3'>
                            <input className='form-control ' name="username" type="text" placeholder='Username' value={user.username} onChange={handleChange}/>
                            <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                        </div>
                        <div className='mb-3'>
                            <input className='form-control ' name="email" type="email" placeholder='Email address' value={user.email} onChange={handleChange}/>
                            <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
                        </div>      
                        <div className='mb-4'>
                            <input className='form-control mb-3' name="password" type="password" placeholder='Set password' value={user.password} onChange={handleChange}/>
                            <input className='form-control ' name="confirm_password" type="password" placeholder='Confirm password' value={user.confirm_password} onChange={handleChange}/>
                            <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                        </div>
                        {success && <div className='alert alert-success'>Registration Successful</div>}
                        { loading ?  (
                            <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/></button>
                        ) :
                        (
                            <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                        )}
                        
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register