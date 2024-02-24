import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
      <ul>
        <li><Link to="/post/categories/Agriculture">Agriculture</Link></li>
        <li><Link to="/post/categories/Business">Business</Link></li>
        <li><Link to="/post/categories/Education">Education</Link></li>
        <li><Link to="/post/categories/Entertentment">Entertentment</Link></li>
        <li><Link to="/post/categories/Art">Art</Link></li>
        <li><Link to="/post/categories/Investment">Investment</Link></li>
        <li><Link to="/post/categories/Weather">Weather</Link></li>
      </ul>
      <div className="copy_right">
        <a href="">Abhishak chowdhury | all right reserved.</a>
      </div>
    </footer>
    </>
  )
}

export default Footer