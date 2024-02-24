import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [inputs,Setinputs]=useState({
    name:'',
    email:'',
    password:'',
    repassword:''
  })
  const ChangeHandler = (e)=>{
    Setinputs(values =>{
      return{...values,[e.target.name]:e.target.value}
    })
  }
  return (
    <>
    <div className="register">
    <h2>Sign Up</h2>
      <form>
        <p>This is an error message</p>
        <input type="text" placeholder="Full name" name="name" value={inputs.name} onChange={ChangeHandler} />
        <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={ChangeHandler} />
        <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={ChangeHandler} />
        <input type="password" placeholder="Re-password" name="repassword" value={inputs.repassword} onChange={ChangeHandler} />
        <button className="custom-btn">Submit</button>

      </form>
      <p>Do you have account? <Link to={'/login'}>sign in</Link> </p>
    </div>
    </>
  )
}

export default Register