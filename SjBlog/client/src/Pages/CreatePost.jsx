import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import {modules, formats} from '../components/Features'
import 'react-quill/dist/quill.snow.css'
const CreatePost = () => {
    const [title , setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content , setContent] = useState('')
   
  return (
   
    <form>
        <input type="title" placeholder='Title' value={title} onChange={e =>setTitle(e.target.value)} />
        <input type="titsummaryle" placeholder='Summary' />
        <input type="file" />
        
        <ReactQuill 
    value={content} 
    modules={modules}  formats={formats}
/>
        <button style={{marginTop: '15px'}}>Create Post</button>

    </form>
  )
}

export default CreatePost