import css from './signup.module.css';

const SignUp = () => {
    const handelSignupForm = (e) => {
        e.preventDefault();
    // const {userName,email,password,type} = e.target;
    }
    return (
        <div className='container'>
            <div className={css.signupContainer}>
                <div className={css.signMain}>
                    <h2 className={css.signTitle}>Sign Up <span></span></h2>
                    <form className={css.signForm} onSubmit={handelSignupForm}>
                        <input type="text" placeholder='Name' name='userName' className={css.signInput} />
                        <input type="email" placeholder='Email' name='email' className={css.signInput} />
                        <input type="password" placeholder='Password' name='password' className={css.signInput} />
                        <select name="type" id="type" className={css.signInput}>
                            <option value="customer">Customer</option>
                            <option value="provider">Provider</option>
                        </select>
                        <button type='submit' className={css.signButton}>Sign Up</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SignUp;
