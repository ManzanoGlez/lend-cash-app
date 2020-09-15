import React from 'react'
import { useDispatch } from 'react-redux';
import { startLoginWithGoogleProvider } from '../../redux/actions/auth';

export const AuthSocialNetworks = () => {

    const dispatch = useDispatch();

    const handleLoginWithGoogle = (e) => {
        e.preventDefault();
         dispatch(startLoginWithGoogleProvider());
    };

    return (
        <div className="auth__social-networks">
            <p>Iniciar sesión con redes sociales</p>

            <div className="google-btn" onClick={handleLoginWithGoogle}>
                <div className="google-icon-wrapper">
                    <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="google button"
                    />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
        </div>
    );
}
