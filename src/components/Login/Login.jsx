import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styles } from './LoginStyles';
import { toast } from 'react-toastify';
import { validatePhoneNumber } from '../../utils';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [buttonHover, setButtonHover] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const navigate = useNavigate();

    const generateOtp = () => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    const onchangeHandler = (e) => {
        setPhoneNumber(e.target.value);
        setPhoneError('')
    }

    const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            sendOtp()
        }
    }

    const sendOtp = () => {
        if (!phoneNumber.trim().length || !validatePhoneNumber(phoneNumber)) {
            setPhoneError('Please enter a valid number');
            return;
        }
        setPhoneError('');

        localStorage.setItem('otp', generateOtp())
        toast.success("OTP send sucessfully");
        navigate('/verify-otp', { state: { phoneNumber } })
    };


    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2 style={styles.header}>LinkedIn Login</h2>
                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="phoneNumber">Phone Number</label>
                    <input
                        style={styles.input}
                        type="tel"
                        id="phoneNumber"
                        name='kfl'
                        value={phoneNumber}
                        onKeyDown={keyPressHandler}
                        onChange={(e) => onchangeHandler(e)}
                    />
                    {phoneError && <p style={styles.error}>{phoneError}</p>}
                </div>
                <button
                    onClick={sendOtp}
                    style={{
                        ...styles.button,
                        ...(buttonHover ? styles.buttonHover : {}),
                    }}
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                >
                    Login
                </button>
            </div>
        </div >
    )
}

export default Login