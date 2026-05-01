import css from './about.module.css';
import { assets } from '../../assets/images/frontend_assets/assets';
import Subscribe from '../../Components/subscribe/Subscribe';
const About = () => {
  return (
    <div className="container">
      <div className={css.aboutContainer}>
        <div className="row">
          <h4>About <span>Us <span></span></span></h4>
          <div className="col-sm-12 col-md-5">
            <div className={css.aboutTopLeft}>
              <img src={assets.about_img} alt="about_image" />
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className={css.aboutTopRight}>
              <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
              <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
              <h6>Our Mission</h6>
              <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>

          </div>
        </div>
        <div className={css.aboutChoose}>
          <div className="row">
            <h4>Why <span>Choose Us <span></span></span></h4>
            <div className="col-sm-12 col-md-4 border">
              <div className={css.aboutConds}>
                <div className={css.aboutDataBox}>
                  <p>Quality Assurance:</p>
                  <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
              </div>

            </div>
            <div className="col-sm-12 col-md-4 border">
              <div className={css.aboutConds}>
                <div className={css.aboutDataBox}>
                  <p>Convenience:</p>
                  <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 border">
              <div className={css.aboutConds}>
                <div className={css.aboutDataBox}>
                  <p>Exceptional Customer Service:</p>
                  <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Subscribe/>
        
      </div>
    </div>
  )
}

export default About
