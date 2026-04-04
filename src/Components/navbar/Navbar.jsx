import css from './navbar.module.css'
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/images/ecomLogo.png'
import { useState } from 'react';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <div className={css.navbar}>
        <div className={css.navMain}>
          <div className={css.navLogoBox}>
            <NavLink to='/'>
              <img src={logo} alt="FOREVER" loading='lazy' />
            </NavLink>
          </div>

          <ul className={css.navLinkBox}>
            <NavLink to="/" className={(({ isActive }) => isActive ? css.navLinkActive : css.navLink)}>
              HOME
            </NavLink>
            <NavLink to="/collection" className={(({ isActive }) => isActive ? css.navLinkActive : css.navLink)}>
              COLLECTION
            </NavLink>
            <NavLink to="/about" className={(({ isActive }) => isActive ? css.navLinkActive : css.navLink)}>
              ABOUT
            </NavLink>
            <NavLink to="/contact" className={(({ isActive }) => isActive ? css.navLinkActive : css.navLink)}>
              CONTACT
            </NavLink>
          </ul>
          <div className={css.navBurger} onClick={()=>setShowMobileNav(true)}>
            <span className="material-symbols-outlined">menu</span>
          </div>
          <NavbarMobile 
            visible={showMobileNav} 
            setShowMobileNav={setShowMobileNav}
          />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
