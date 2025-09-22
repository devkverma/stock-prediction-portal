import React from 'react'
import Button from './Button'


const Home = () => {
  return (
    <>
        
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1>Stock Prediction Portal</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate cumque voluptates aspernatur aut corporis minus! Quos recusandae enim molestias possimus libero quia modi eligendi quisquam necessitatibus! Cupiditate, rerum quidem!</p>
                <Button text='Login' style='btn-info'/>
            </div>
        </div>
        
    </>
  )
}

export default Home