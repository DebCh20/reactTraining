import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" to='/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to='/condition'>conditional</Link>
        </li>    
        <li className="nav-item">
        <Link className="nav-link active" to='/Increment' >Increment</Link>
        </li>    
        <li className="nav-item">          
        <Link className="nav-link active" to='/prodGall' >Product gallery</Link>
        </li>       
        <li className="nav-item">          
        <Link className="nav-link active" to='/passport' >Passport Page</Link>
        </li>       
        <li className="nav-item">          
        <Link className="nav-link active" to='/classcomp' >class component</Link>
        </li>       
        <li className="nav-item">          
        <Link className="nav-link active" to='/LifecycleFunc' >lifecycle function</Link>
        </li>       
        <li className="nav-item">          
        <Link className="nav-link active" to='/Lifecycle' >lifecycle</Link>
        </li>       
        <li className="nav-item">          
        <Link className="nav-link active" to='/Form' >Forms</Link>
        </li>       
        <li className="nav-item">          
        <Link className="nav-link active" to='/todolist' >todolist</Link>
        </li>       
        <li className="nav-item">          
        <Link className="nav-link active" to='/redux' >redux</Link>
        </li>       
      </ul> 
    </nav>
    </div>
  )
}

export default Header