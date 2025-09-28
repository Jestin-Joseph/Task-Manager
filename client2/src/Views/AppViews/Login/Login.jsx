import React, { useState, useContext } from 'react';
import styles from './Login.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { authApi } from '../../../services/api';

import { AuthContext } from '../../../Context/AuthContext';

import { EyeClosed, Eye } from 'lucide-react';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const isSignIn = path === "/login";

    const [showPassword, setShowPassword] = useState(false);

    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({})

    const labels = isSignIn ? {
        heading: "Sign In",
        accountExists: "Don't have an account?",
        redirect_text: "Sign Up",
        redirect: "/signup",
        button_text: "login"

    } : {
        heading: "Create An Account",
        accountExists: "Already have an account?",
        redirect_text: "Login",
        redirect: "/login",
        button_text: "Create Account"
    }

    const handleFormEdit = (type, value) => {
        setFormData({
            ...formData,
            [type]: value
        })
    }

    const isFormValid = () => {
        if (!isSignIn) {
            if (!formData.first_name || !formData.last_name) {
                window.alert("First and Last name are required!")
                return false
            }
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            window.alert("Email is not given or not in correct format. Please Check!")
            return false
        }

        if (!formData.password || /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(formData.password)) {
            window.alert("Password is not given or not in correct format. Please Check!")
            return false
        }

        return true

    }

    const handleSubmit = () => {
        if (isFormValid()) {
            authApi.post(isSignIn ? `/login` : `/register`, formData)
                .then(response => {
                    console.log(isSignIn ? "user logged in successfully!" : "user account created successfully");
                    // console.log("boo", response)
                    if (isSignIn) {
                        login(response.data.userDetails, response.data.token)
                    }
                    setTimeout(() => navigate(isSignIn ? `/` : `/login`), 2000)
                    // navigate(isSignIn ? `/` : `/login`)


                })
                .catch(error => {
                    console.error('something wonet wrong', error.response.data || error.message)
                    window.alert(error.response.data.message);
                    // console.log(error.response.data.message)
                })
        }


    }

    return (
        <div className={styles.sign_up_container}>
            <div className={styles.sign_up_heading_container}>
                <p>{labels.heading}</p>
                <p>{labels.accountExists} <a href={labels.redirect}>{labels.redirect_text}</a></p>
            </div>

            <div className={styles.sign_up_form_container}>
                <p className={styles.warning}><span>*</span> All fields are required</p>
                {!isSignIn && <span className={styles.sign_up_name_containter}>
                    <input value={formData?.first_name} onChange={(e) => { handleFormEdit("first_name", e.target.value) }} placeholder='First Name' type='text' />
                    <input value={formData?.last_name} onChange={(e) => { handleFormEdit("last_name", e.target.value) }} placeholder='Last Name' type='text' />
                </span>}
                <input value={formData?.email} onChange={(e) => { handleFormEdit("email", e.target.value) }} placeholder='Email' type='email' className={styles.sign_up_email_input} />
                <span className={styles.sign_up_pass_terms} >
                    {!isSignIn && <p className={`${styles.warning} ${styles.passWarning}`}><span>*</span> Password should have atleast 10 characters, including atleast one number, symbol and uppercase alphabet.</p>}
                    <div style={{ position: "relative" }}>
                        <input
                            value={formData?.password}
                            pattern="\w{3,16}"
                            required
                            onChange={(e) => handleFormEdit("password", e.target.value)}
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: "absolute",
                                right: "8px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: '#fff'
                            }}
                        >
                            {showPassword ? <Eye /> : <EyeClosed />}
                        </button>
                    </div>
                    <label>
                        <input type="checkbox" />
                        {isSignIn ? <p>Remember me</p> : <p>I accept the <a href='/'>Accept Terms and Conditions</a></p>}

                    </label>
                </span>

                <button onClick={handleSubmit} className={styles.sign_up_loginBtn}>
                    {labels.button_text}
                </button>

            </div>
            <div className={styles.form_seperator}><span>Or register with</span></div>
            <div className={styles.sign_up_auth_btns}>
                <button>
                    Google
                </button>
                <button>
                    Apple
                </button>
            </div>

        </div>
    )
}

export default Login