import React, {useState} from 'react'
import axios from 'axios'


const Register = () => {
    const [user, setUser] = useState({
        "first_name" : '',
        "last_name" : '',
        "username" : '',
        "email" : '',
        "password" : '',
        "confirm_password" : '',
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', user)
            console.log('response.data = ',response.data)
            console.log('Registration successfull')
        } catch(error) {
            console.error('Registration error: ', error.response.data)
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
                        <input className='form-control mb-3' name="username" type="text" placeholder='Username' value={user.username} onChange={handleChange}/>
                        <input className='form-control mb-3' name="email" type="email" placeholder='Email address' value={user.email} onChange={handleChange}/>
                        <input className='form-control mb-3' name="password" type="password" placeholder='Set password' value={user.password} onChange={handleChange}/>
                        <input className='form-control mb-5' name="confirm_password" type="password" placeholder='Confirm password' value={user.confirm_password} onChange={handleChange}/>
                        <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register