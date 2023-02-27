import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
      <Navbar className="bg-dark shadow-lg">
        <Container>
          <div className="p-2 flex-grow-1 bd-highlight">
            <Link to='/' style={{ textDecoration: "none", fontWeight: "800", fontFamily: "cursive" }}><Navbar.Brand className='ubantu_font text-light' style={{letterSpacing:"3.5px" , fontSize:"xx-large"}}>ItsNotDown</Navbar.Brand></Link>
          </div>
          <div className="p-2 bd-highlight">
            <Link to='/auth' style={{ textDecoration: "none", fontWeight: "800", fontFamily: "cursive" }}>
              <a type="button" className="zz width_10rem">Login</a>
            </Link>
          </div>
        </Container>

      </Navbar>
    </div>
  )
}

export default Nav
