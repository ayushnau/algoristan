import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    return (
        <>
            <div className="footermasterContainer">
                <div className="firstFooter">
                    <ul className="listContainer">
                        <li className="list"><Link to="/Articles">Articles</Link></li>
                        <li className="list"><Link to="/Team">Team</Link></li>
                        <li className="list"><Link to="#">Learning</Link></li>
                        <li className="list"><Link to="PrivacyPolicy">Privacy Policy</Link></li>
                        <li className="list"><Link to="#">Careers</Link></li>
                        <li className="list"><Link to="Articles">Projects</Link></li>
                    </ul>
                </div>
                <div className="secondFooter">
                    <div className="footerheading">Vision</div>
                    <div className="footerpara">To make life easy</div>
                    <div className="footerheading">Mission</div>
                    <div className="footerpara">Simplification</div>
                    <div className="footerheading">Work Culture</div>
                    <div className="footerpara">We allow work to happen and it happens.</div>
                </div>

                <div className="footerSocial">
                    <Link to="#"><span><i className="fab fa-instagram"></i></span></Link>
                    <Link to="#"><span><i className="fab fa-linkedin-in"></i></span></Link>
                    <Link to="#"><span><i className="fab fa-twitter"></i></span></Link>
                    <Link to="#"><span><i className="fab fa-facebook-square"></i></span></Link>
                </div>
            </div>
            <div className="footersecContainer">
                <div className="footerCopyright">© 2022 Algoristan Research All right reserved</div>
                <div className="footertop"><Link to="#navid"><i className="fa fa-arrow-up"></i></Link></div>
            </div>
        </>
    )
}

export default Footer