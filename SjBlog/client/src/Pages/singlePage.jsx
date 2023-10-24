import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';


const SinglePage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const { id } = useParams();
 

    useEffect(() => {
        fetch(`https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/post/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch post');
            }
            return response.json();
        })
        .then(data => {
            setPostInfo(data);
        })
        .catch(error => {
            console.error("There was an error fetching the post:", error);
        });
    }, []);
  
    // console.log(postInfo.cover);
    // const title = postInfo.title

  
    if(!postInfo) return ''

    const formattedDate = new Date(postInfo.createdAt).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
  return (
    <div  className='post-page'>
   <h1>
    { postInfo && postInfo.title}
</h1>


<div>
  {postInfo && <time>{formattedDate}</time>} 
  <div className="icon-wrapper author">
                          posted by  <FaUser className="icon" /> {/* Person Icon */}
                            <a id="sj" className="">@{postInfo.author.username}</a>
                        </div>
</div>
   
 
  <div className='image' >
  {postInfo && 
  <img src={`https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/${postInfo.cover}`} alt="Post Cover"/>}  

  </div>
 
<div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </div>
  )
}

export default SinglePage 