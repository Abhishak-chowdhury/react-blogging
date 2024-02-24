import React from 'react'
import { Link } from 'react-router-dom'
const SingleAuthor = (props) => {
  return (
    <>
    <Link to={`/post/author/1`} className="post_author">
        <div className="author_img">
          <img src={props.Author_image} alt="" />
        </div>
        <div className="author_name">
          <h5>By: {props.author_name}</h5>
          <small>just now</small>
        </div>
        </Link>
    </>
  )
}

export default SingleAuthor