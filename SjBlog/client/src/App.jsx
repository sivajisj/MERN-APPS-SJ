

import './App.css'
import i from './assets/p.jpg'
function App() {

  return (
    <>
   <main>
    <header>
      <a href="#" className='logo'><kbd>SJ</kbd>Blog</a>
      <nav>
        <a href="">login</a>
        <a href="">Register</a>
      </nav>
    </header>
    <div className="entries">
      <div className="entry">
        <img src={i} class="post" alt='logo' />
        <h2>This Tech Services Company Has What It Takes to Succeed | The Motley Fool</h2>
      </div>
    </div>
   </main>
    </>
  )
}

export default App
