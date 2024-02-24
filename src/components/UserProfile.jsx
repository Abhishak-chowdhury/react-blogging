import React,{useState} from 'react'
import author from '../images/author.jpg'
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
const UserProfile = () => {
  const [avtar,SetAvtar]=useState('')
  const [inputs,Setinputs]=useState({
    
    email:'',
    name:'',
   
  })
  const ChangeHandler = (e)=>{
    Setinputs(values =>{
      return{...values,[e.target.name]:e.target.value}
    })
  }
  return (
    
    <>
    <div className="profile_container">
      <div className="profile_content">
        <Link to={'/mypost/1'}>my posts</Link>
        <div className="profile_header">
          <div className="profile_img">
            <img src={author} alt="profile" />
          </div>
          <form>
            <input type="file" name="avtar" id="avtar" onChange={e=>SetAvtar(e.target.files)} accept="png ,jpg ,jpeg" />
            <label htmlFor="avtar"><FaEdit /></label>
          </form>
        </div>
        
      </div>
      <div className="profile_footer">
          <h2>Abhishak</h2>
          <form>
        <p>This is an error message</p>
        <input type="text" placeholder="Full name" name="name" value={inputs.name} onChange={ChangeHandler} />
        <input type="email" placeholder="Email" name="email" value={inputs.email} onChange={ChangeHandler} />
        
        
        <button className="custom-btn">update details</button>

      </form>
        </div>
    </div>
    </>
  )
}

export default UserProfile