import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [inputs,Setinputs]=useState({
    
    email:'',
    password:'',
   
  })
  const ChangeHandler = (e)=>{
    Setinputs(values =>{
      return{...values,[e.target.name]:e.target.value}
    })
  }
  return (
    <>
    <div className="login">
    <h2>Sign In</h2>
      <form>
        <p>This is an error message</p>
        
        <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={ChangeHandler} />
        <input type="password" placeholder="Password" name="password" value={inputs.password} onChange={ChangeHandler} />
        
        <button className="custom-btn">Submit</button>

      </form>
      <p>Don't have account? <Link to={'/register'}>sign Up</Link> </p>
    </div>
    </>
  )
}

export default Login