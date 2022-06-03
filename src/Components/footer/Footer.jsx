import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footermasterContainer">
                <div className="firstFooter">
                    <ul className="listContainer">
                        <li className="list"><a href="/Articles">Articles</a></li>
                        <li className="list"><a href="/Team">Team</a></li>
                        <li className="list"><a href="#">Learning</a></li>
                        <li className="list"><a href="PrivacyPolicy">Privacy Policy</a></li>
                        <li className="list"><a href="#">Careers</a></li>
                        <li className="list"><a href="#">Projects</a></li>
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
                    <a href="#"><span><i className="fab fa-instagram"></i></span></a>
                    <a href="#"><span><i className="fab fa-linkedin-in"></i></span></a>
                    <a href="#"><span><i className="fab fa-twitter"></i></span></a>
                    <a href="#"><span><i className="fab fa-facebook-square"></i></span></a>
                </div>
            </div>
            <div className="footersecContainer">
                <div className="footerCopyright">© 2022 Algoristan Research All right reserved</div>
                <div className="footertop"><a href="#navid"><i className="fa fa-arrow-up"></i></a></div>
            </div>
        </>
    )
}

export default Footer