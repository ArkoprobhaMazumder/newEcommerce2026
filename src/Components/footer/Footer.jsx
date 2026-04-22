import css from './footer.module.css';
import { assets } from '../../assets/images/frontend_assets/assets';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <div className={css.footerContainer}>
            <div className="container">
                <div className={css.footerMain}>
                    <div className={css.footerItem}>
                        <img src={assets.logo} alt="Logo" loading='lazy'/>
                        <p className={css.comDesc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className={css.footerItem}>
                        <h5>COMPANY</h5>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About Us</NavLink>
                            </li>
                            <li>
                                {/* <NavLink to="/delivery">Delivary</NavLink> */}
                                Delivary
                            </li>
                            <li>
                                {/* <NavLink to="/privacy">Privacy Policy</NavLink> */}
                                Privacy Policy
                            </li>
                        </ul>
                    </div>
                    <div className={css.footerItem}>
                        <h5>GET IN TOUCH</h5>
                        <ul>
                            <li>+1-212-456-7890</li>
                            <li><a href="mailto:arkoprobha.majumder@1999.com">contact@foreveryou.com</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={css.copyRight}>
                    <p>Copyright&copy; &nbsp; 2024@ forever.com - All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
