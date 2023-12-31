import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <a className="navbar-brand" href=""><img src="Favourthedevlogo.png" className="img-responsive" alt="Favourthedevlogo" height="100" width="100"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">PROJECTS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#Contact">CONTACT</a>
              </li>
            
          </ul>
         
        </div>
        </div>
      </nav>
  )
}

export default Nav