import React from 'react'
import './Intro.css'
import Card from '../Card/Card'
import pic5 from '../../Static/pic20.avif'
import pic6 from '../../Static/pic19.avif'
import pic7 from '../../Static/pic17.avif'
import pic8 from '../../Static/pic18.avif'

const Intro = () => {
    return (
        <>
            <div id='frontpage' className="intromasterContainer">
                <div className="secondintro">
                    <div className="heading">Who We Are</div>
                    <div className="intropara">
                        We are a team of Scientists and Engineers trained in the field of Computer Science and Engineering with a strong inclination toward problem-solving.
                    </div>
                    <div className="introlistmaster">
                        <div className="introfollowers">We primarily work in the following domains:</div>
                        <ul className="introlist">
                        <Card Logo={pic5} textheading={"Data Analysis"} textpara={""} />
                        <Card Logo={pic6} textheading={"Internet of things(IoT)"} textpara={""} />
                        <Card Logo={pic7} textheading={"Artificial Intelligence - Machine Learning"} textpara={""} />
                        <Card Logo={pic8} textheading={"Computer Vision"} textpara={""} />

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro