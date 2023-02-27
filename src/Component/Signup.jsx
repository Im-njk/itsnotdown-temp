import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import First from './SignupComponents/First';
import Second from './SignupComponents/Second';
import Third from './SignupComponents/Third';
import { Link } from 'react-router-dom';

const Signup = () => {

  const [page, setPage] = useState(0);

  const [x, setX] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsappno: "",
    url: "",
  });

  const componentList = [
    <First
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <Second
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    // <Third
    //   formData={formData}
    //   setFormData={setFormData}
    //   page={page}
    //   setPage={setPage}
    //   x={x}
    //   setX={setX}
    // />,
  ];


  return (
    <>
      <div className="logincard shadow-lg p-3 mb-5 bg-white rounded mx-auto">
        <h1 className='h1 ubantu_font my-5'>Welcome! Let's get <span className='h1 ubantu_font pcolor my-5'>Started</span></h1>
        <hr className='hr my-4' />
        {componentList[page]}
        <p className="signupTxt my-4 px-5">
          <Link className="roboto signup pcolor" to="/auth/login" href="#">Already a User! Please sign-in</Link>
        </p>
      </div>
    </>
  )
}

export default Signup