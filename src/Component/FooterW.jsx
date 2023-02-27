import React from 'react'
import '../CssFiles/FooterW.css'

const FooterW = () => {
    return (
        <div className='shadow-lg'>
            <footer className='bg-dark'>

                <div className="footer-content">

                    <h3 className='text-light ubantu_font' style={{letterSpacing:"3.5px"}}>ItsNotDown</h3>

                    <p className='text-secondary roboto' style={{letterSpacing:"1.5px"}}>ItsNotDown a web monitoring tool which is software that tracks website performance and availability, alerting administrators to downtime or issues.</p>

                    <ul className="socials">

                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>

                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>

                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>

                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>

                        <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>

                    </ul>

                </div>

                {/* <div className="footer-bottom">

                    <p>Copyright <span id="year"></span> <a href="#">@coding_dev_</a> </p>

                    <div className="footer-menu">

                        <ul className="f-menu">

                            <li><a href="">Home</a></li>

                            <li><a href="">About</a></li>

                            <li><a href="">Contact</a></li>

                            <li><a href="">Blog</a></li>

                        </ul>

                    </div>

                </div> */}

            </footer>

        </div>
    )
}

export default FooterW
