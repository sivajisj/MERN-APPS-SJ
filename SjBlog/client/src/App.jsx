


import Header from './components/Header';
import Layout from './components/Layout';

import {Routes,Route} from 'react-router-dom'
import IndexPage from './Pages/IndexPage';
import Login from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
function App() {

  return (
   <Routes>
    <Route path='/' element={<Layout/>} >
    <Route index element={<IndexPage/>} />

    <Route path='/login' element={<Login/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    </Route>
    
   </Routes>
   
    
  )
}

export default App
