import css from './navbar.module.css'
import { NavLink, Outlet } from 'react-router-dom';
import { assets } from '../../assets/images/frontend_assets/assets';
import { useState } from 'react';
import NavbarMobile from './NavbarMobile';
import Footer from '../footer/Footer';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <div className="container border-bottom">

        <div className={css.navbar}>
          <div className={css.navMain}>
            <div className={css.navLogoBox}>
              <NavLink to='/'>
                <img src={assets.logo} alt="FOREVER_LOGO" loading='lazy' />
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

            <div className={css.navUtilityBox}>
              <div className={css.navUserProfile}>
                <div className={css.searchLogoBox}>
                  {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                  <img src={assets.search_icon} alt="forevr_search" loading='lazy' />
                </div>
                <div className={css.userLogoBox}>
                  {/* <i className="fa-solid fa-circle-user"></i> */}
                  <img src={assets.profile_icon} alt="forevr_user" loading='lazy' />
                  <div className={css.userProfileContainer}>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'fw-bold fs-5' : 'fw-bold fs-5'}>
                      Profile
                    </NavLink>
                    <NavLink to='/order' className={({ isActive }) => isActive ? 'fw-bold fs-5' : 'fw-bold fs-5'}>
                      Orders
                    </NavLink>
                    <NavLink to='/login' className={({ isActive }) => isActive ? 'fw-bold fs-5' : 'fw-bold fs-5'}>
                      Logout
                    </NavLink>
                  </div>
                </div>
                <div className={css.cartLogoBox}>
                  <img src={assets.cart_icon} alt="forevr_cart" loading='lazy' />
                  <div className={css.cartItemCount}>0</div>
                </div>
              </div>
            </div>

            {/* Mobile hamburger menu Responsive */}
            <div className={css.navBurger} onClick={() => setShowMobileNav(true)}>
              {/* <span className="material-symbols-outlined">menu</span> */}
              <img src={assets.menu_icon} alt="nav_burger" loading='lazy'/>
            </div>
            <NavbarMobile
              visible={showMobileNav}
              setShowMobileNav={setShowMobileNav}
            />
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Navbar
