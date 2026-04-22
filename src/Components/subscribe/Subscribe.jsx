import css from './subscribe.module.css'

const Subscribe = () => {
  return (
    <div className={css.subscribeContainer}>
        <div className={css.subscribeMain}>
          <p className={css.subsTitle}>Subscribe now & get 20% off</p>
          <p className={css.subsDesc}>Sign up for our newsletter and stay updated with the latest news and offers.</p>
          <div className={css.subscribeForm}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default Subscribe
