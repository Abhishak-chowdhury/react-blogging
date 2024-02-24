import React from 'react'
import { Link } from 'react-router-dom'
import SingleAuthor from './SingleAuthor'

const Post = (props) => {
  const short_desc=props.desc.length>200 ? props.desc.substr(0,200)+ ". . . " : props.desc
  const short_title=props.title.length>30 ? props.title.substr(0,30)+ ". . . " : props.title
  return (
    <>
    <div className="single_post">
      <div className="image_thumble">
        <img src={props.thumbnali} alt={props.category} />
      </div>
      <div className="post_content">
        <Link to={`/post/${props.postid}`} >{short_title}</Link>
        <p>{short_desc}</p>
      </div>
      <div className="author_content">
        < SingleAuthor Author_image={props.Author_image} author_name={props.author_name}/>
        <Link to={`post/categories/${props.category}`} className="post_category">{props.category}</Link>
      </div>
    </div>
    </>
  )
}

export default Post