import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="error">
      <Link className="custom-btn" to="/">Go back home</Link>
      <h2>Page Not Found</h2>
    </div>
    </>
  )
}

export default Error