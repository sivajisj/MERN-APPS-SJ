import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    }, [id]);
    console.log(postInfo.cover);
  return (
    <div>
        <img className="singlePageImage" src={`https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/${postInfo.cover}`}/>
    </div>
  )
}

export default SinglePage 