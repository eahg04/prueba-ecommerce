/* ============================ IMPORTS ============================ */
//Hooks
import { useEffect, useState } from 'react'
//Router
import { Link } from 'react-router-dom'
//CSS
import './styles/Navbar.css'
/* ======================================================================== */

const Navbar = () => {
  const [navBgActive, setNavBgActive] = useState()
  const changeNavBg = (body) => {
    body.getBoundingClientRect().top >= -20 ? setNavBgActive(false) : setNavBgActive(true)
  }
  
  useEffect(() => {
    const body = document.querySelector('body')
    window.addEventListener('scroll', () => {
      changeNavBg(body)
    })
    window.addEventListener('load', () => {
      changeNavBg(body)
    })
  }, [])
  return (
    <nav className={`c-navbar ${navBgActive ? 'c-navbar--background-visible' : ''}`}>
      <Link className='navbar__icon-ecommerce' to='/'>
        Tennis
      </Link>
    </nav>
  )
}

export default Navbar