import React from 'react'
import Card from '../Card/Card'
import './Courses.css'
import Logo from '../../Static/vector5.png'
import pic1 from '../../Static/dataanalysis.jpg'
import pic2 from '../../Static/machinelearning.jpg'
import pic3 from '../../Static/pipeline.jpg'
import pic4 from '../../Static/computervision.jpg'
import pic5 from '../../Static/deploy.jpg'
import pic6 from '../../Static/aiimplentaion.jpg'
import pic7 from '../../Static/iot.jpg'
import pic8 from '../../Static/optimization.jpg'
import pic9 from '../../Static/pic2.jpg'
import pic10 from '../../Static/pic3.jpg'
import pic11 from '../../Static/pic4.jpg'


const Courses = () => {
    return (
        <>
            <div className="coursesmasterContainer">
                <div className="courseconsultancyMaster">
                    <div className="courseconsultacyHeading heading">
                        Consultancy to organisations on projects
                    </div>
                    <div className="courseCard">
                        <Card Logo={pic1} textheading={"Data Analysis"} textpara={"Data Analytics program designed exclusively for freshers and early career professionals."} />
                        <Card Logo={pic2} textheading={"Machine Learning/Deep Learning Model tuning"} textpara={"Become a Machine Learning Expert with Best Machine Learning Training"} />
                        <Card Logo={pic3} textheading={"End-to-end Data Pipeline Implementation"} textpara={"Learn how to build data engineering pipelines"} />
                        <Card Logo={pic4} textheading={"Computer Vision Application Development and Maintenance"} textpara={" Learn about computer vision to advance your education and caree"} />
                        <Card Logo={pic5} textheading={"Deployment of AI Applications"} textpara={"This course introduces the concepts of Artificial Intelligence and Machine learning"} />
                        <Card Logo={pic6} textheading={"AI implementation on Edge Devices"} textpara={"This course teaches you about deep model compression and optimization technique"} />
                        <Card Logo={pic7} textheading={"IoT Data Analysis"} textpara={"This is practical course to learn IoT and Data Analytics from the beginning"} />
                        <Card Logo={pic8} textheading={"Optimisation of Models for Edge Devices"} textpara={"Learn how to optimize your model and application code"} />
                    </div>
                </div>
                <div className="coursesMaster">
                    <div className="coursemasterHeading heading">
                    Trainings, Workshops and Courses in:
                    </div>
                    <div className="courseCard">
                        <Card  Logo={pic9} textheading={"Machine Learning"} textpara={"Data Analytics program designed exclusively for freshers and early career professionals."}/>
                        <Card  Logo={pic10} textheading={"Deep Learning"} textpara={"Data Analytics program designed exclusively for freshers and early career professionals."}/>
                        <Card  Logo={pic11} textheading={"Data Analysis"} textpara={"Data Analytics program designed exclusively for freshers and early career professionals."}/>
                    </div>
                </div>

                <div className="coursehomeSolution">
                <div className="heading homesolutionHeading">Custom Smart Home Solution</div>
                </div>
            </div>
        </>
    )
}

export default Courses


