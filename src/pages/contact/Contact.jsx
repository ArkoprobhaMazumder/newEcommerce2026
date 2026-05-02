import css from './contact.module.css';
import {assets} from '../../assets/images/frontend_assets/assets';
import Subscribe from '../../Components/subscribe/Subscribe';

const Contact = () => {
  return (
    <div className='container'>
      <div className="mt-3">
        <div className={css.contactMain}>
          <h4>Contact <span>Us <span></span></span></h4>
          <div className="mt-5">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className={css.contactImg}>
                  <img src={assets.contact_img} alt="asseetContact" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className={css.contactInfo}>
                  <h6>Our Store</h6>
                  <div className="mt-3">
                    <p>54709 Willms Station</p>
                    <p>Suite 350, Washington, USA</p>
                  </div>
                  <div className="mt-3">
                    <p>Tel: (415) 555-0132</p>
                    <p>Email: admin@forever.com</p>
                  </div>
                  <h6 className={css.infoTit}>Careers at Forever</h6>
                  <p>Learn more about our teams and job openings.</p>
                  <div className="mt-3">
                    <button>Explore Jobs</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={css.contactSubscribe}>
            <Subscribe/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
