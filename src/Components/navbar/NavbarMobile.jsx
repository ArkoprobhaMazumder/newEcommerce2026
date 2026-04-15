import css from './navbar.module.css';
import NavMobItem from './NavMobItem';

const NavbarMobile = (props) => {
    const { visible,setShowMobileNav } = props;

    return (
        <div className={visible ? css.navbarMobile : css.navbarMobileHidden}>
            <div className={css.navbarMobileContent}>
                <div className={css.navMobileTop}>
                   <i className="fa-solid fa-xmark" onClick={()=>setShowMobileNav(false)}></i>
                </div>
                <NavMobItem/>
            </div>
        </div>
    )
}

export default NavbarMobile
