import React, { useContext, useState } from 'react'
import Styles from './TopBar.module.scss'

import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

import elevare_logo from '../../Assets/elevare_empty_logo.png'

import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { ThemeToggle } from '../../StylingComponent/ThemeSettings/ThemeToggle';
//icons

import { UserRound } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';



function TopBar() {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    function onLogout() {
        authContext.logout();
        navigate('/login');
    }
    return (
        <div className={Styles.topBarContainer}>
            <div style={{ display: 'flex', gap: '3em' }}>
                <div className={Styles.logo_icon}>
                    <img src={elevare_logo} alt='company-logo' />
                </div>

            </div>

            <div className={Styles.rightControls}>
                <ThemeToggle />
                <Avatar

                    sx={{ cursor: 'pointer', backgroundColor: '#1C2A4B', height:'35px', width:'35px' }}
                    alt={`${authContext?.user?.first_name} ${authContext?.user?.last_name}`}
                    src="/static/images/avatar/1.jpg"
                    onClick={() => setOpen(!open)} // setOpen(prev => !prev)
                />
                {open && (
                    <div className={Styles.settings_menu}>
                        {/* menu items here */}
                        <div className={Styles.userDetails}>
                            <Avatar
                                sx={{ cursor: 'pointer', backgroundColor: '#1C2A4B' }}
                                alt={`${authContext?.user?.first_name} ${authContext?.user?.last_name}`}
                                src="/static/images/avatar/1.jpg"
                                onClick={() => setOpen(!open)} // setOpen(prev => !prev)
                            />
                            <div>
                                <Typography variant='h6'>{`${authContext?.user?.first_name} ${authContext?.user?.last_name}`}</Typography>
                                <Typography variant='body2'>{`${authContext?.user?.email} `}</Typography>
                            </div>
                        </div>
                        <div className={Styles.settingsMenuItem}>
                            <UserRound size={20} />
                            <Typography variant='body2'>Profile</Typography>
                        </div>
                        <div className={Styles.settingsMenuItem}>
                            <Settings size={20} />
                            <Typography variant='body2'>Account Settings</Typography>
                        </div>
                        <div onClick={onLogout} className={Styles.settingsMenuItem}>
                            <LogOut size={20} />
                            <Typography variant='body2'>Log Out</Typography>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TopBar