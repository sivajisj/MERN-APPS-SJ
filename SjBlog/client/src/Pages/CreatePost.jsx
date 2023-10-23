import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import {modules, formats} from '../components/Features'
import 'react-quill/dist/quill.snow.css'
const CreatePost = () => {
    const [title , setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content , setContent] = useState('')
    const [files , setFiles] = useState(null)

    async function createNewPost(e){
     
      const data = new FormData()
      data.set('title',title)
      data.set('summary',summary)
      data.set('content',content)
      data.set('file',files[0])
     
      e.preventDefault()
      const response = await fetch('https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/post',{
        method: 'POST',
        body :data
       })
      if(response.ok){
        
      }
    }
   
  return (
   
    <form enctype="multipart/form-data" onSubmit={createNewPost}>
        <input type="title" placeholder='Title' value={title} onChange={e =>setTitle(e.target.value)} />
        <input type="summary" placeholder='Summary' value={summary} onChange={e => setSummary(e.target.value)} />
        <input type="file" name="file" onChange={e => setFiles(Array.from(e.target.files))}  />
        
        <ReactQuill 
    value={content}  onChange={newVal =>setContent(newVal)}
    modules={modules}  formats={formats}
/>
        <button type='submit' style={{marginTop: '15px'}}>Create Post</button>

    </form>
  )
}

export default CreatePost