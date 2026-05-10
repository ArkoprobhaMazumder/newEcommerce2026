import css from './login.module.css';

const Login = () => {
    return (
        <div className='container'>
            <div className={css.signupContainer}>
                <div className={css.signMain}>
                    <h2 className={css.signTitle}>Log in <span></span></h2>
                    <form className={css.signForm} >
                        <input type="email" placeholder='Email' name='email' className={css.signInput} />
                        <input type="password" placeholder='Password' name='password' className={css.signInput} />
                        <select name="type" id="type" className={css.signInput}>
                            <option value="customer">Customer</option>
                            <option value="provider">Provider</option>
                        </select>
                        <button type='submit' className={css.signButton}>Log In</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
