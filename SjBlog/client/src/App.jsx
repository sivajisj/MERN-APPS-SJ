


import Header from './components/Header';
import Layout from './components/Layout';

import {Routes,Route} from 'react-router-dom'
import IndexPage from './Pages/IndexPage';
import {UserContextProvider} from './UserContext'
import Login from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import CreatePost from './Pages/CreatePost';
function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<IndexPage/>} />

      <Route path='/login' element={<Login/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/create" element={<CreatePost/>}/>
      </Route>
      
   </Routes>
    </UserContextProvider>
 
   
    
  )
}

export default App
