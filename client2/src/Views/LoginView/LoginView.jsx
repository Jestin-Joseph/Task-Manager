import React from 'react'
import styles from './LoginView.module.scss'
import { Outlet } from 'react-router-dom'
import pic from "../../Assets/elevare_logo.png"
function LoginView() {
    return (
        <div className={styles.LoginView_Container}>
            <div className={styles.LoginView_logo}>
                <img src={pic} alt='company logo' />
            </div>
            <div className={styles.LoginView_forms_containeer}>
                <Outlet />
            </div>
        </div>
    )
}

export default LoginView