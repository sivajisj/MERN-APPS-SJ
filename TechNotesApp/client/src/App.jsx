import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import UsersList from './features/users/UsersList'
import NotesList from './features/notes/NotesList'

function App() {
 

  return (
    <Routes >
      <Route path="/" element={<Layout/>}>
        <Route index element={<Public/>}/>
        <Route path='login' element={<Login/>}/>
          <Route path='dash' element={<DashLayout/>}>
             <Route index element={<Welcome/>}/>

             <Route path="users" >
             <Route index element={<UsersList/>}/>
             </Route>


             <Route path="notes" >
                <Route index element={<NotesList/>}/>
             </Route>

             </Route> {/* End of the dash */}


      </Route>
    </Routes>
  )
}

export default App
