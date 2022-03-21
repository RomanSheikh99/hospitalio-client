import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {
        googleSignIn,
        getEmail,
        getPassword,
        signInUsingEmail,
        error,
        setUser,
        setError,
        setIsLoading
    } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home';
    
    const handleEmail = (e) => {
        const email = e.target.value;
        getEmail(email);
    }

    const handlePassword = (e) => {
        const password = e.target.value;
        getPassword(password);
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    };

    const handleEmailLogin = () => {
        signInUsingEmail()
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    };

    return (
        <div className="d-flex justify-content-center align-items-center my-5">
            <div style={{ boxShadow: "0px 0px 8px 0px #ddd" }} className=" text-center rounded-2 p-4">
                <div
                    style={{ height: '100px', width: '100px', background: '#12C1AD', fontSize: "60px" }}
                    className='d-flex justify-content-center align-items-center rounded-circle mx-auto'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <h4 className="my-3">Please Login</h4>
                <div>
                    <div class="form-floating mb-3">
                        <input onChange={handleEmail} style={{ width: '260px' }} type="email" class="form-control py-2 rounded-pill" id="floatingInput" placeholder="Your Email" />
                        <label for="floatingInput">Email Address</label>
                    </div>
                    <div class="form-floating">
                        <input onChange={handlePassword} style={{ width: '260px' }} type="password" class="form-control py-2 rounded-pill" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleEmailLogin}
                        style={{ background: '#12C1AD', outline: 'none', width: '260px' }}
                        className="btn mt-3 px-3 rounded-pill border-0 text-white">
                        Login
                    </button>
                </div>
                <span className="text-danger my-2">{error}</span><br />
                <span className="mt-1">Don't have any Account? <Link to='/register'>Register</Link></span>
                <h6 className="my-2">---Or---</h6>
                <button
                    onClick={handleGoogleLogin}
                    style={{ background: '#12C1AD', outline: 'none', width: '260px' }}
                    className="btn px-2 rounded-pill border-0 text-white">
                    Login With Google 
                </button>
            </div>
        </div>
    );
};

export default Login;