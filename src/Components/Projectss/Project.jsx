import React from 'react'
import './Project.css'

const Project = () => {
    return (
        <div className="projectMasterContainer">
            <div className="heading">Our Projects</div>
            <div className="ProjectsContainer">
                <div className="paraheading">Certified</div>
                <div className="aboutproject">Certified is the simplest tool to issue documents that can be verified by scanning a QR Code.</div>
                <div className="smallheading margintop">Use Cases</div>
                <ul className="CasesList">
                    <li>Certificate Distribution</li>
                    <li>Official Letters</li>
                    <li>Degrees, Marksheets, etc.</li>
                </ul>
                <div className="smallheading margintop">Special Feature</div>
                <ul className="CasesList">
                    <li>Always available</li>
                    <li>Easy to use. Just design your document and give a list of recipients. Rest will be done by Certified..</li>
                    <li>Easily share your documents with a Certified.id</li>
                </ul>
            </div>
        </div>
    )
}

export default Project