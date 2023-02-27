import React from 'react'
import BrokenLinkImg from '../Images/broken-link.png';
import SSLImg from '../Images/subusers.svg';
import HealthImg from '../Images/health.png';
import LatencyImg from '../Images/latency.png';
import banner1 from '../Images/bannerup.png';
import bannerd from '../Images/bannerd.png';
import laptopImg from '../Images/homepageImg.png';
import Reviews from '../Component/Reviews';
import { Link } from 'react-router-dom';
import '../CssFiles/HomeCard.css';

const Homepage = () => {
    return (
        <div>
            <div className='shadow-lg bg-dark rounded'>
                <div className="row">
                    <div className="row container mx-5 mt-5">
                        <div className='col-lg-6 col-sm-12 text-center'>
                            <img className='' src={laptopImg} height="400px"></img>
                        </div>
                        <div className='col-lg-6 col-sm-12 my-auto mx-auto'>
                            <p className=' roboto text-start' style={{ fontSize: 'xxx-large', marginBottom: "-1rem", textDecoration: "none", color: "#a49ee7" }}>Downtime happens.</p>
                            <p className='text-light text-start roboto ' style={{ fontSize: 'xxx-large' }}> Don't worry! we'll tell you</p>
                            <p className='roboto text-light' style={{ marginBottom: "0rem", fontSize: "large" }}>Get notified when your website is down with </p>

                            <span className='roboto' style={{ whiteSpace: "pre", color: "#a49ee7", fontSize: "large" }}>
                                ItsNotDown - a web monitoring tool
                            </span>
                        </div>

                    </div>
                    <div className='my-5 center-block' style={{ display: "flex", justifyContent: "center" }} >
                        <Link to="/dashboard" className='zz width_20rem' href="#"><span className='roboto'>Get Started!</span></Link>
                    </div>
                </div>
            </div>

            <div className='my-3'></div>
            <h1 className='roboto text-center my-5'>Lets get your <span className='pcolor roboto' >Website</span> Monitored</h1>


            <div className="conrainer">
                <div className="row my-5">
                    <div className="col-lg-6 col-md-12">
                        <div className='rounded-circle pcolor_bg m-auto' style={{ height: "400px", aspectRatio: "1/1", display:"flex", alignItems : "center", justifyContent:"center"}} >
                        <img className='shadow-lg' style={{height:"auto" , width:"80%", borderRadius:"20px"}} src={HealthImg}></img>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center" style={{ alignSelf: "center" }}>
                        <h2 className='roboto'>Content <span className='pcolor roboto'>Heading</span></h2>
                        <h5 className='roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam ex modi voluptatibus reprehenderit nostrum et, soluta ducimus. Et quisquam repellendus molestiae nihil tempore facere odio vel modi sunt quidem!</h5>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 text-center" style={{ alignSelf: "center" }}>
                        <h2 className='roboto'>Content <span className='pcolor roboto'>Heading</span></h2>
                        <h5 className='roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam ex modi voluptatibus reprehenderit nostrum et, soluta ducimus. Et quisquam repellendus molestiae nihil tempore facere odio vel modi sunt quidem!</h5>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className='rounded-circle pcolor_bg' style={{ margin: "auto", height: "400px", aspectRatio: "1/1", display:"flex", alignItems : "center", justifyContent:"center" , borderRadius:"20px"  }} >
                        <img className='shadow-lg' style={{height:"auto" , width:"80%", borderRadius:"20px"}} src={HealthImg}></img>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 col-md-12">
                        <div className='rounded-circle pcolor_bg m-auto' style={{ height: "400px", aspectRatio: "1/1", display:"flex", alignItems : "center", justifyContent:"center" , borderRadius:"20px"  }} >
                        <img className='shadow-lg' style={{height:"auto" , width:"80%", borderRadius:"20px"}} src={HealthImg}></img>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center" style={{ alignSelf: "center" }}>
                        <h2 className='roboto'>Content <span className='pcolor roboto'>Heading</span></h2>
                        <h5 className='roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam ex modi voluptatibus reprehenderit nostrum et, soluta ducimus. Et quisquam repellendus molestiae nihil tempore facere odio vel modi sunt quidem!</h5>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 col-md-12 text-center" style={{ alignSelf: "center" }}>
                        <h2 className='roboto'>Content <span className='pcolor roboto'>Heading</span></h2>
                        <h5 className='roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam ex modi voluptatibus reprehenderit nostrum et, soluta ducimus. Et quisquam repellendus molestiae nihil tempore facere odio vel modi sunt quidem!</h5>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className='rounded-circle pcolor_bg' style={{ margin: "auto", height: "400px", aspectRatio: "1/1", display:"flex", alignItems : "center", justifyContent:"center" , borderRadius:"20px" }} >
                            <img className='shadow-lg' style={{height:"auto" , width:"80%", borderRadius:"20px"}} src={HealthImg}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-dark shadow-lg p-5'>
                <h1 className='ubantu_font text-light text-center mb-5' style={{ marginTop: "0px" }}>What we <span className='pcolor ubantu_font'>Provide</span> </h1>
                <div className='row mx-3 mx-auto mb-5'>
                    <div className="col-lg-6 col-sm-12 col-md-6  col-xs-12">
                        <div className="card">
                            <div className="card_body">
                                <h4 className="card_title roboto">Health Status</h4>
                                <div className="card_image">
                                    <img  src={HealthImg}></img>
                                </div>
                                <p className="card_text roboto">Health status in website refers to the overall well-being of a website, including factors such as uptime, speed, website latency and broken links.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6  col-xs-12">
                        <div className="card">
                            <div className="card_body">
                                <h4 className="card_title roboto">Web Latency</h4>
                                <div className="card_image">
                                    <img style={{ maxWidth: "100", maxheight: "100" }} src={LatencyImg}></img>
                                </div>
                                <p className="card_text roboto">Web latency is the delay experienced in transmitting data over the internet. It affects website response time, user experience and overall performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews />
            <div className="mt-5"></div>
        </div>
    )
}

export default Homepage
