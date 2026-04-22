import css from './policy.module.css';
import { assets } from '../../assets/images/frontend_assets/assets';

const Policy = () => {
    return (
        <div className={css.policyContainer}>
            <div className={css.policyMain}>
                <div className={css.policyBox}>
                    <img src={assets.exchange_icon} alt="" />
                    <p>Easy Exchange Policy</p>
                    <p>We offer hassle free  exchange policy</p>
                </div>
                <div className={css.policyBox}>
                    <img src={assets.quality_icon} alt="" />
                    <p>7 Days Return Policy</p>
                    <p>We provide 7 days free return policy</p>
                </div>
                <div className={css.policyBox}>
                    <img src={assets.support_img} alt="" />
                    <p>Best customer support</p>
                    <p>we provide 24/7 customer support</p>
                </div>
            </div>
        </div>
    )
}

export default Policy;
