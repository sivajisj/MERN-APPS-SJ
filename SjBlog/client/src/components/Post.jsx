import React from 'react'
import i from '../assets/p.jpg'
import { FaUser, FaClock } from 'react-icons/fa';


const Post = ({title, summary, cover, content,createdAt , author}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});
  return (
    <>
    <div className="entries">
      <div className="entry">
        <div className="image">
        <img src={`https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/${cover}`} className="post-image" alt='logo' />       
         </div>
           <div className="text">
             <h2>{title}</h2>
             <p className="info">
                        <span className="icon-wrapper">
                            <FaUser className="icon" /> {/* Person Icon */}
                            <a className="author">{author.username}</a>
                        </span>
                        <span className="icon-wrapper">
                            <FaClock className="icon" /> {/* Time Icon */}
                            <time>{formattedDate}</time>
                        </span>
                    </p>
             <p className="summary">{summary}</p>
            </div>
         </div>
     </div> 
    </>
  )
}

export default Post