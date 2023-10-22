import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext)
  // const [username, setUsername] = useState(null)
  useEffect(()=>{ 
    fetch('https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/profile',{
      credentials:'include',
    }).then(response =>{
      response.json().then(userInfo =>{
        // setUsername(userInfo.username)
        setUserInfo(userInfo)


      })
    })
  },[])

  function logout(){
        fetch('https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/logout',{
          credentials :'include',
          method : 'POST'
        })
        setUserInfo(null)
  }   


  const username = userInfo?.username
  return (
   <>
     <header>
      <Link to="/" className='logo'><kbd>SJ</kbd>Blog</Link>
      <nav>
        {username && (
          <>
          <Link to='/create' >Create new Post</Link>
          <a href="" onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
          <Link to="/login">login</Link>
        <Link to="/register">Register</Link>
          </>
        )}
        
      </nav>
    </header>
   </>
  )
}

export default Header