import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Cat=["Education","Science","Business"]
const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]
const CreatePost = () => {
  const [title,Settitle]=useState('')
  const [catdata,Setcatdata]=useState('')
  const [avtar,SetAvtar]=useState('')
  return (
    <>
    <div className="createpost_container">
      <div className="createpost_content">
      <h2>Create post</h2>
      <p className="r">error message</p>
      <form>
        <input type="text" placeholder="title" value={title} onChange={e=>{Settitle(e.target.value)}}/>
        <select name="category" value={catdata} onChange={e=>{Setcatdata(e.target.value)}}>
          {
              Cat.map((dat,id)=>{
                return <option key={id}>{dat}</option>
              })
          }
        </select>
        
      </form>
      <ReactQuill theme="snow"
                    modules={modules}
                    formats={formats}>
        </ReactQuill>
        <input type="file" onChange={e=>{SetAvtar(e.target.files[0])}} accept="png ,jpg ,jpeg"/>
        <button className="custom-btn">Create</button>
      </div>
    </div>
    </>
  )
}

export default CreatePost