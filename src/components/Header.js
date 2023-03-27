import React from 'react'

const Navbar = () => {
  return (
    <nav className='header'> 
        <img src={require("../image/trollface.png")} className='header--image' alt="" />
        <h2 className='header--title'> Meme Generator</h2>
        <h4 className='header--project'> React Course - Project 3</h4>
    </nav>
  )
}

export default Navbar