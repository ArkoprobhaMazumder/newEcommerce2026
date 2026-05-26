import css from './navbar.module.css'
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { assets } from '../../assets/images/frontend_assets/assets';
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import NavbarMobile from './NavbarMobile';
import Footer from '../footer/Footer';
import { handelLogout } from '../../helper/util';
import { getCurrentUser } from '../../redux/user';
import {userPendingGlob, userFulfilled, userRejected} from '../../redux/user';



const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const user=JSON.parse(localStorage.getItem('user'));
  const userId = user?.id||null;
  const location = useLocation();
  const homePage = location.pathname === '/';
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(userPendingGlob());
    try{
      if(userId){
        getCurrentUser(userId).then((d)=>{
          dispatch(userFulfilled(d));
        })
      }
    }catch(error){
      dispatch(userRejected(error.message));
        console.error("Error fetching user data:", error);
    }
  },[])

  return (
    <>
      <div className={`container ${!homePage ? 'border-bottom' : ''}`}>
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
                {!userId ?
                  (<a href="/login" className={css.navLink}>Login/Sign Up</a>)
                  :
                  (<div className={css.userLogoBox}>
                    {/* <i className="fa-solid fa-circle-user"></i> */}
                    <img src={assets.profile_icon} alt="forevr_user" loading='lazy' />
                    <div className={css.userProfileContainer}>
                      <NavLink to='/about' className={({ isActive }) => isActive ? 'fw-bold fs-5' : 'fw-bold fs-5'}>
                        Profile
                      </NavLink>
                      <NavLink to='/order' className={({ isActive }) => isActive ? 'fw-bold fs-5' : 'fw-bold fs-5'}>
                        Orders
                      </NavLink>
                      <NavLink to='/login' onClick={handelLogout} className={({ isActive }) => isActive ? 'fw-bold fs-5' : 'fw-bold fs-5'}>
                        Logout
                      </NavLink>
                    </div>
                  </div>)
                }
                <div className={css.cartLogoBox}>
                  <img src={assets.cart_icon} alt="forevr_cart" loading='lazy' />
                  <div className={css.cartItemCount}>0</div>
                </div>
              </div>
            </div>

            {/* Mobile hamburger menu Responsive */}
            <div className={css.navBurger} onClick={() => setShowMobileNav(true)}>
              {/* <span className="material-symbols-outlined">menu</span> */}
              <img src={assets.menu_icon} alt="nav_burger" loading='lazy' />
            </div>
            <NavbarMobile
              visible={showMobileNav}
              setShowMobileNav={setShowMobileNav}
            />
          </div>
        </div>
      </div >
      <Outlet />
      <Footer />
    </>
  )
}

export default Navbar
