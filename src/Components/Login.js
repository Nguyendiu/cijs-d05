import React from 'react'
// import Button from '@material-ui/core/Button'
import '../asset/Login.css'

const Login = (props) => {
    const { email, setEmail, password, setPassword, handlerLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;
    return (
        <section className="login">
            <div className='loginContainer'>
                <h2>LOGIN</h2>
                <label>UserName</label>
                <input id="userInput"
                    type='text'
                    autoFocus required
                    value={email} onChange={e => setEmail(e.target.value)}
                />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input id='passwordInput'
                    type='password'
                    autoFocus required
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <div className='check'>
                            <button variant="contained" color="primary" onClick={handlerLogin}>Sign In</button>

                            <p> Don't have an account?
                            <button onClick={() => setHasAccount(!hasAccount)} onClick={() => setHasAccount(!hasAccount)} >Sign Up</button>
                            </p>
                        </div>
                    ) : (
                            <div className='check'>
                                <button  id='btnSignUp' onClick={handleSignUp}>Sign Up</button>

                                <p>Have an account?
                           <button onClick={() => setHasAccount(!hasAccount)}>Sign In</button></p>
                            </div>
                        )}
                </div>

            </div>
        </section>
    )
}
export default Login;