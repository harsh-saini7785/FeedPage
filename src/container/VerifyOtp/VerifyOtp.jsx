import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import OtpInput from '../../components/OtpInput/OtpInput';
import { toast } from 'react-toastify';
import { styles } from './VerifyOtpStyles';
import { getOtp } from '../../utils';


const VerifyOtp = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [buttonHover, setButtonHover] = useState(false);
    const [otpError, setOtpError] = useState('');
    const [originalOtp, setOriginalOtp] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    const { phoneNumber } = location.state || {};

    useEffect(() => {
        const otp = localStorage.getItem('otp')
        setOriginalOtp(otp)
        if (!otp) {
            navigate('/login')
            return;
        }
        setTimeout(() => toast.info(`Your OTP is ${otp}`, {
            autoClose: 8000,
        }), 3000)
    }, [])

    const verifyOtp = () => {
        if (!otp) {
            setOtpError('OTP is required');
            return;
        }
        if (getOtp(otp) === originalOtp) {
            localStorage.setItem('user', phoneNumber);
            toast.success("User Login Sucessfully!");
            localStorage.removeItem('otp')
            navigate('/')
        } else {
            setOtpError('OTP is invalid');
            toast.error("OTP is invalid!");
        }
    };


    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2 style={styles.header}>LinkedIn Login</h2>
                <div style={styles.inputGroup}>
                    <OtpInput verifyOtp={verifyOtp} setOtpError={setOtpError} otpError={otpError} otp={otp} setOtp={setOtp} />
                </div>
                <button
                    onClick={verifyOtp}
                    style={{
                        ...styles.button,
                        ...(buttonHover ? styles.buttonHover : {}),
                    }}
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                >
                    Verify Otp
                </button>
            </div>
        </div >
    )
}


export default VerifyOtp