import React, { useEffect, useState } from 'react'
import Post from "../components/Post"
const IndexPage = () => {
  const [posts, setPosts] = useState([])
   useEffect(() => {
    fetch('https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/post').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
    })
   },[])
  return (
    <>
    {posts.length > 0 && posts.map(post => {
     return <Post {...post} />
    })}
  

    </>
  )
}

export default IndexPage