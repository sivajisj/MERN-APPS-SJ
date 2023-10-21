import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'
import '../App.css'
const Login = () => {
  const [username ,setUsername] = useState('')
  const [password , setPassword] = useState('')
  const [redirect, setRedirect] = useState('')

  async function login(ev){
    ev.preventDefault()
    const response = await fetch('https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io/login',{
      method: 'POST',
      body : JSON.stringify({username,password}),
     headers : {"Content-Type" : "application/json"},
     credentials: 'include',
    })
    if(response.ok){
      setRedirect(true)
    }else{
      alert("wrong credentials")
    }
  }
  
  if(redirect){
    return <Navigate to={'/'}/>
  }
  return (
    <form className='login' onSubmit={login}>
      <h1>Login</h1>
         <input type='text' placeholder='username'
          value={username} onChange={ev=>setUsername(ev.target.value)} />

         <input type='password' placeholder='password'
          value={password} onChange={ev=> setPassword(ev.target.value)}  />
         <button type='submit'>Login</button>
    </form>
  )
}

export default Login