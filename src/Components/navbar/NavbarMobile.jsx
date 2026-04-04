


import React from 'react';
import css from './navbar.module.css';

const NavbarMobile = (props) => {
    const { visible,setShowMobileNav } = props;

    return (
        <div className={visible ? css.navbarMobile : css.navbarMobileHidden}>
            <div className={css.navbarMobileContent}>
                <div className={css.navMobileTop}>
                   <i class="fa-solid fa-xmark" onClick={()=>setShowMobileNav(false)}></i>
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile
