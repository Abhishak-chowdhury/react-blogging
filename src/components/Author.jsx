import React, { useState } from 'react'
import auth from '../images/author.jpg'
import { Link } from 'react-router-dom'
const authordata=[
  {
    id:1,
    image:auth,
    name:"abhishak chowdhury",
    posts:2
  },
  {
    id:2,
    image:auth,
    name:"Ayan chowdhury",
    posts:2
  },
  {
    id:3,
    image:auth,
    name:"Sourav ghosh",
    posts:3
  },
  {
    id:4,
    image:auth,
    name:"Raihan ghosh",
    posts:5
  },
]
const Author = () => {
  const[data,Setdata]=useState(authordata)

  return (
    <div className="author_container">
      {
        data.map((dat,id)=>{
          return <Link to={''} key={id}>
          <div className="image_author">
            <img src={dat.image} alt={dat.name} />
          </div>
          <div className="author_info">
            <h4>{dat.name}</h4>
            <p>Posts : {dat.posts}</p>
          </div>
          </Link>
        })
      }
    </div>
  )
}

export default Author