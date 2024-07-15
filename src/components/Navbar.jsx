import React from 'react'
import { FaLinkedin} from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { VscMail } from "react-icons/vsc";
import logo from '../assets/abhishekLogo.png'


const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img className="h-full" src={logo} alt='logo'/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/abhishktiwary/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='text-cyan-50' />
      </a>
      <a href="https://github.com/abhishektiwary01" target="_blank" rel="noopener noreferrer">
        <FaGithub className='text-cyan-50' />
      </a>
      <a href="mailto:abhishektiwary201@gmail.com" target="_blank" rel="noopener noreferrer">
        <VscMail className='text-cyan-50' />
      </a>
    </div>
    </nav>


  )
}

export default Navbar