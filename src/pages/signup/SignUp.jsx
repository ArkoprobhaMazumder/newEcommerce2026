import { useEffect, useState } from 'react';
import css from './signup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from './signup.duck';
import { newUserSuccess, newUserPending, newUserError } from './signup.duck';
import { ClipLoader } from "react-spinners";




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
    const { signup } = useSelector(state => state);
    const { signupPending } = signup;


    useEffect(() => {
        if (signupResponse.err) {
            if (signupResponse.type === 'unknown') {
                return window.alert(signupResponse.err);
            }
            return window.alert(signupResponse.err.errors || signupResponse.err.message);
        } else {
            console.log("Signup Success", signupResponse);
        }
    }, [signupResponse]);


    const handelSignupForm = async (e) => {
        e.preventDefault();
        dispatch(newUserPending());
        const response = await userSignUp(userData);
        if (response.status !== 201) {
            dispatch(newUserError(signupResponse.err));
            if (response.status !== 400) {
                return setSignupResponse({
                    type: 'unknown',
                    data: null,
                    err: response.statusText
                })
            }
            return setSignupResponse({ type: 'validation', data: null, err: response.data });
        }
        dispatch(newUserSuccess());
        return setSignupResponse({ type: 'successful user', data: response.data, err: null });
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
                        <button type='submit' className={css.signButton}>
                            {
                                !signupPending
                                    ?
                                    'Sign Up'
                                    : (
                                        <ClipLoader
                                            color={`#00`}
                                            loading={signupPending}
                                            size={20}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    )
                            }
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SignUp;
