
import { handelUser } from '../../helper/util';
import { userLogin } from './login.duck';
import css from './login.module.css';
import {useState} from 'react';

const Login = () => {
    const [userData,setUserData]=useState({
        email:'',
        password:'',
        type:'customer'
    })

    const handelSignInForm = (e) => {
        e.preventDefault();
        userLogin(userData).then((response)=>{
           const res= handelUser(false, response.data);
           if(res) window.location.href = '/';
           else window.alert('Login failed. Please check your credentials and try again.');
        });
    }
    return (
        <div className='container'>
            <div className={css.signupContainer}>
                <div className={css.signMain}>
                    <h2 className={css.signTitle}>Log in <span></span></h2>
                    <form className={css.signForm} onSubmit={handelSignInForm}>
                        <input type="email" placeholder='Email' name='email' className={css.signInput} value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                        <input type="password" placeholder='Password' name='password' className={css.signInput} value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} />
                        <select name="type" id="type" className={css.signInput} value={userData.type} onChange={(e) => setUserData({...userData, type: e.target.value})}>
                            <option value="customer">Customer</option>
                            <option value="provider">Provider</option>
                        </select>
                        <div className={css.signInOptions}>
                            <a href="/signup" className={css.forgotPassword}>Forgot Password?</a>
                            <a href="/signup" className={css.createAccount}>create account</a>
                        </div>
                        <button type='submit' className={css.signButton}>Log In</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
