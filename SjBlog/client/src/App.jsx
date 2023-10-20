
import { FaUser, FaClock } from 'react-icons/fa';
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
        <div className="image">
        <img src={i} className="post-image" alt='logo' />       
        </div>
       <div className="text">
        <h2>Exploring the Future: The Rise and Impact of Drones in Modern Technological Era</h2>
         <p className="info">
                    <span className="icon-wrapper">
                        <FaUser className="icon" /> {/* Person Icon */}
                        <a className="author">Sivajisj</a>
                    </span>
                    <span className="icon-wrapper">
                        <FaClock className="icon" /> {/* Time Icon */}
                        <time>2023-10-20 13:20</time>
                    </span>
                </p>
        <p className="summary">Drones, once a figment of science fiction, have seamlessly integrated into the fabric
           of our modern society. Initially developed for military applications, 
           these flying marvels have diversified into various sectors,
           from aerial photography .</p>
        </div>
      </div>

      
 
      
     

      
      <div className="entry">
      <div className="image">
        <img src={i} className="post-image" alt='logo' />       
        </div>
               <div className="text">
        <h2>Exploring the Future: The Rise and Impact of Drones in Modern Technological Era</h2>
         <p className="info">
                    <span className="icon-wrapper">
                        <FaUser className="icon" /> {/* Person Icon */}
                        <a className="author">Sivajisj</a>
                    </span>
                    <span className="icon-wrapper">
                        <FaClock className="icon" /> {/* Time Icon */}
                        <time>2023-10-20 13:20</time>
                    </span>
                </p>
        <p className="summary">Drones, once a figment of science fiction, have seamlessly integrated into the fabric
           of our modern society. Initially developed for military applications, 
           these flying marvels have diversified into various sectors,
           from aerial photography.</p>
        </div>
      </div>

      
    </div>
   </main>
    </>
  )
}

export default App
