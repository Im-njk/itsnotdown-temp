import React from 'react'
import { Link } from 'react-router-dom'
const LoginComponent = () => {
    return (
        <>
            <div className="logincard shadow-lg p-3 mb-5 bg-white rounded mx-auto">
                <h1 className='h1 ubantu_font  my-5'>Hello! Please <span className='h1 ubantu_font pcolor my-5'>Login</span></h1>
                <hr className='hr my-4' />
                <form className='mx-auto' style={{ marginTop: "50px", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div class="group">
                        <input className='roboto' type="email" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className='ubantu_font' style={{ fontSize: "20px" }}>Email</label>
                    </div>

                    <div class="group">
                        <input type="password" required />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className='ubantu_font' style={{ fontSize: "20px" }} >Password</label>
                    </div>

                </form>
                <button className='zz width_80 my-4'>Login</button>
                <p className='my-2'>
                    <Link className='forget roboto pcolor'  href="#">Forget Password</Link>
                </p>
                <p className="signupTxt my-4 px-5">
                    <Link className = "roboto signup pcolor"to="/auth/signup" href="#">New User! Sign-up</Link>
                </p>
            </div>
        </>
    )
}

export default LoginComponent