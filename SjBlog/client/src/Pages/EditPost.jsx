import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import Editor from './Editor'


const EditPost = () => {

  const {id} = useParams()
  const [title , setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content , setContent] = useState('')
  const [files , setFiles] = useState(null)
  
  const [redirect, setRedirect] = useState(false)



  useEffect(()=>{
    fetch(`https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/post/${id}`)
    .then(response => {
      response.json().then(postInfo => {
        setTitle(postInfo.title)
        setContent(postInfo.content)
        setSummary(postInfo.summary)
       
        


      })
    })
  },[])
  async function updatePost(e){

    const data = new FormData()
    data.set('title',title)
    data.set('summary',summary)
    data.set('content',content)

    if(files?.[0]){
      data.set('file',files?.[0])

    }



    e.preventDefault();
    const response = await fetch('https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/post',{
      method: 'PUT',
      body :data,
      credentials:'include'
     })
     setRedirect(true)
  }

  if(redirect){
    return <Navigate to={`/post/${id}`}/>
   }
  return (
   
    <form enctype="multipart/form-data" onSubmit={updatePost}>
            <h1>Editing Post</h1>

        <input type="title" placeholder='Title' value={title} onChange={e =>setTitle(e.target.value)} />
        <input type="summary" placeholder='Summary' value={summary} onChange={e => setSummary(e.target.value)} />
        <input type="file" name="file" onChange={e => setFiles(Array.from(e.target.files))}  />
          
          <Editor onChange={setContent}  value={content} />

        <button type='submit' style={{marginTop: '15px'}}>Update Post</button>

    </form>
  )
}

export default EditPost