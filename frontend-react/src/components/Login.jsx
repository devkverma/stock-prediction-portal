import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
    const [user, setUser] = useState({
        "username" : '',
        "password" : '',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true)
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', user)
        setError('')
        localStorage.setItem('accessToken', response.data.access)
        localStorage.setItem('refreshToken', response.data.refresh)
        setIsLoggedIn(true)
        navigate('/dashboard')
      } catch (error) {
        setError('Incorrect Username or/and Password')
        setIsLoggedIn(false)
      } finally {
        setLoading(false)
      }
    }

  return (
    <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 bg-light-dark rounded p-5'>
                    <h3 className='text-center mb-4'>Login into your Portal</h3>
                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <input className='form-control ' name="username" type="text" placeholder='Username' value={user.username} onChange={handleChange}/>
                        </div>    
                        <div className='mb-4'>
                            <input className='form-control mb-3' name="password" type="password" placeholder='Password' value={user.password} onChange={handleChange}/>
                            {error && <div className='text-danger text-center'>{error}</div>}
                        </div>

                        { loading ?  (
                            <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/></button>
                        ) :
                        (
                            <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                        )}
                        
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login