import React from 'react'
import Postdata from '../layoutcomponents/Postdata'
import Post from '../layoutcomponents/Post'
const Category = () => {
  return (
    <>
    <div className="post_container">
      {
        Postdata.map((data,i)=>{
          return <Post key={i} postid={data.id} thumbnali={data.thumbnali} category={data.category} title={data.title} desc={data.desc} author_id={data.author_id} author_name={data.author_name} Author_image={data.Author_image} />
        })
      }
    </div>
    </>
  )
}

export default Category