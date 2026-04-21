import React from 'react';
import css from './banner.module.css';

const Banner = (props) => {

    const { bannerPic } = props;
    return (
        <div className={css.bannerContainer}>
            <div className={css.bannerMain}>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className={css.bannerTextCont}>
                            <div className={css.bannerFirstText}>
                                <p></p>
                                <p>OUR BEST SELLERS</p>
                            </div>
                            <div className={css.bannerSecondText}>
                                <h2>Latest Arrivals</h2>
                            </div>
                            <div className={css.bannerThirdText}>
                                <h5>SHOP NOW</h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={css.bannerImgContainer}>
                            <img src={bannerPic} alt="banner" loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
