import React,{useState} from 'react'
import science from '../images/science.jpg'
import education from '../images/edu.jpg'
import { Link } from 'react-router-dom'
const postdata=[
  {
    id:1,
    image:education,
    title:"This is our first blog post"
  },
  {
    id:2,
    image:science,
    title:"This is our second blog post"
  }
]

const Dashboard = () => {
  const[dat,Setdata]=useState(postdata)
  return (
    <>
    <div className="dashboard_container">
      {
        dat.map((data,id)=>{
          return <div className="dashboard_content" key={id}>
            <div className="first_section">
              <div className="post_img">
                <img src={data.image} alt="" />
              </div>
              <h4>{data.title}</h4>
            </div>
            <div className="second_section">
              <Link to={''} className="view">view</Link>
              <Link to={`/post/${data.id}/edit`} className="edit">edit</Link>
              <Link to={''} className="delete">delete</Link>
            </div>
          </div>
          
        })
      }
    </div>
    </>
  )
}

export default Dashboard