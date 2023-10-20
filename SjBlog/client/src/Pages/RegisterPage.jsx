import React, { useState } from 'react'
import '../App.css'

const RegisterPage = () => {
  const [username, setUsername]  = useState('')
  const [password , setPassword] = useState('')
  
  async function register(ev){
    ev.preventDefault();
    await fetch('https://5000-sivajisj-mernappssj-yla1k59cxe6.ws-us105.gitpod.io',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    })

  }

  return (
    <form className='register' onSubmit={register}>
      <h1>Register</h1>
         <input type='text' placeholder='username' value={username}
         onChange={ev => setUsername(ev.target.value)}
         />
         <input type='password' placeholder='password' value={password}
         onChange={ev => setPassword(ev.target.value)} />
         <button type='submit'>Register</button>
    </form>
  )
}

export default RegisterPage