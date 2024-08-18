import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleAuth: React.FC = () => {
    const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: (response) => {
            console.log('Google Sign-In Response:', response);
            if (response?.access_token) {
                localStorage.setItem('googleToken', response.access_token);
                console.log('Access token stored:', response.access_token);
                navigate('/home');
            } else {
                console.error('No access token found in the response');
            }
        },
        onError: (error) => {
            console.error('Google Sign-In Error:', error);
        },
    });

    return (
        <div>
            <button className="sign-btn" onClick={() => {
                login();
            }}>
                Sign in
            </button>
        </div>
    );
};

export default GoogleAuth;
