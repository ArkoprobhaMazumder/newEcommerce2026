import { useEffect, useState } from 'react';
import css from './signup.module.css';
import { useDispatch } from 'react-redux';
import { userSignUp } from './signup.duck';

const SignUp = () => {
    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        password: '',
        type: ''
    });
    const [signupResponse, setSignupResponse] = useState({
        type: '',
        data: null,
        err: null
    });
    const dispatch = useDispatch();


    useEffect(()=>{
        console.log(888,signupResponse);
    },[signupResponse]);


    const handelSignupForm = async (e) => {
        e.preventDefault();
        const response = await userSignUp(userData);
        if (response.status !== 201) {
            if (response.status !== 400) {
                return setSignupResponse({
                    type: 'unknown',
                    data: null,
                    err: response.statusText
                })
            }
            return setSignupResponse({ type: 'validation', data: null, err: response.data })
        }
        return setSignupResponse({ type: 'successful user', data: response.data, err: null })
    }
    return (
        <div className='container'>
            <div className={css.signupContainer}>
                <div className={css.signMain}>
                    <h2 className={css.signTitle}>Sign Up <span></span></h2>
                    <form className={css.signForm} onSubmit={handelSignupForm}>
                        <input type="text" placeholder='Name' name='userName' value={userData.userName} onChange={(e) => setUserData({ ...userData, userName: e.target.value })} className={css.signInput} required />
                        <input type="email" placeholder='Email' name='email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} className={css.signInput} required />
                        <input type="password" placeholder='Password' name='password' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} className={css.signInput} required />
                        <select name="type" id="type" value={userData.type} onChange={(e) => setUserData({ ...userData, type: e.target.value })} className={css.signInput} required>
                            <option value="customer">Customer</option>
                            <option value="provider">Provider</option>
                        </select>
                        <div className={css.signInOptions}>
                            <a href="/login" className={css.createAccount}>Already have an account? Log in</a>
                        </div>
                        <button type='submit' className={css.signButton}>Sign Up</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SignUp;
