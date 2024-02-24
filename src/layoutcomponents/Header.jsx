import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [isNavshowing,Setnav]=useState(window.innerWidth > 500 ? true : false)
  const buttonHandel=()=>{
    if(window.innerWidth < 500){
      Setnav(true)
    }
    else{
      Setnav(false)
    }
  }
  return (
    
    <>
    <div className="nav_item">
    <nav>
        <Link to="/" className="logo" onClick={buttonHandel}>
          <img src={logo} alt="" />
        </Link>
        { isNavshowing && <ul className="nav_ul">
            <li><Link to="/profile/1" onClick={buttonHandel}>Abhishak</Link></li>
            <li><Link to="/CreatePost" onClick={buttonHandel}>Create post</Link></li>
            <li><Link to="/author" onClick={buttonHandel}>Authors</Link></li>
            <li><Link to="/Logout" onClick={buttonHandel}>Logout</Link></li>
        </ul>}
        <button className="icon-btn" onClick={()=>Setnav(!isNavshowing)}>
        {
          isNavshowing ? <AiOutlineClose /> :<FaBars />
        }
        </button>
    </nav>
    </div>
    
    </>
  )
}

export default Header