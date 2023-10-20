


import Header from './components/Header';
import Layout from './components/Layout';

import {Routes,Route} from 'react-router-dom'
import Post from './components/Post';
function App() {

  return (
   <Routes>
    <Route path='/' element={<Layout/>} >
    <Route index element={<Post/>} />

    <Route path={'/login'} element={ <div>Login Page</div>}/>
    </Route>
    
   </Routes>
   
    
  )
}

export default App
