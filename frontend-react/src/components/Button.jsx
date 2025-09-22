import React from 'react'

const Button = (props) => {
  return (
    <>
        <a className={`btn ${props.style}`} href="">{props.text}</a>
    </>
  )
}

export default Button