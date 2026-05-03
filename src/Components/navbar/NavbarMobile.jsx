import css from './navbar.module.css';
import NavMobItem from './NavMobItem';
import { assets } from '../../assets/images/frontend_assets/assets';

const NavbarMobile = (props) => {
    const { visible, setShowMobileNav } = props;

    return (
        <div className={visible ? css.navbarMobile : css.navbarMobileHidden}>
            <div className={css.navbarMobileContent}>
                <div className={css.navMobileTop}>
                    <img src={assets.profile_icon} alt="Forever_Profile" />
                    <i className="fa-solid fa-xmark" onClick={() => setShowMobileNav(false)}></i>
                </div>
                <NavMobItem />
            </div>
        </div>
    )
}

export default NavbarMobile
