import css from './navbar.module.css';
import { NavLink } from 'react-router-dom';





const NavMobItem = () => {
    return (
        <div className={css.navMobileLinkBox}>
            <div className='container'>
                <div className={css.navMobileLink}>
                    <NavLink to='/' className={({ isActive }) => isActive ? css.navLinkActiveMob : 'fw-bold fs-5'}>
                        Home
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? css.navLinkActiveMob : 'fw-bold fs-5'}>
                        About
                    </NavLink>
                    <NavLink to='/collection' className={({ isActive }) => isActive ? css.navLinkActiveMob : 'fw-bold fs-5'}>
                        Collection
                    </NavLink>
                    <NavLink to='/order' className={({ isActive }) => isActive ? css.navLinkActiveMob : 'fw-bold fs-5'}>
                        Order
                    </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? css.navLinkActiveMob : 'fw-bold fs-5'}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavMobItem
