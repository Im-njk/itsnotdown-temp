import React from 'react'
import { Outlet } from 'react-router-dom';
import '../CssFiles/Login.css'
import banner from '../Images/homepageImg.png';
const Login = () => {
    return (
        <>
            <div className='row py-5 '>
                <div className='col-lg-6 col-sm-12 text-center'>
                    <img height="500px" src={banner}></img>
                </div>
                <div className='col-lg-6 col-sm-12 text-center'>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}

export default Login
