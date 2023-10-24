import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Editor from './Editor'

const CreatePost = () => {
    const [title , setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content , setContent] = useState('')
    const [files , setFiles] = useState(null)
    const [redirect, setRedirect] = useState(false)


    async function createNewPost(e){
     
      const data = new FormData()
      data.set('title',title)
      data.set('summary',summary)
      data.set('content',content)
      data.set('file',files[0])
     
      e.preventDefault()
      const response = await fetch('https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/post',{
        method: 'POST',
        body :data,
        credentials:'include'
       })
      if(response.ok){
        setRedirect(true)
      }
    }
   if(redirect){
    return <Navigate to={"/"}/>
   }
  return (
   
    <form enctype="multipart/form-data" onSubmit={createNewPost}>
      <h1>Creating Post</h1>
        <input type="title" placeholder='Title' value={title} onChange={e =>setTitle(e.target.value)} />
        <input type="summary" placeholder='Summary' value={summary} onChange={e => setSummary(e.target.value)} />
        <input type="file" name="file" onChange={e => setFiles(Array.from(e.target.files))}  />
        
   

       <Editor  value={content} onChange={setContent}  />
        <button type='submit' style={{marginTop: '15px'}}>Create Post</button>

    </form>
  )
}

export default CreatePost