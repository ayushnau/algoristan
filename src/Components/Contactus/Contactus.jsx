import React from 'react'
import './Contactus.css'

const Contactus = () => {
    return (
        <div className="contactMasterContainer">
            <div className="heading">Get in touch with out expert team</div>
            <form className="contactformContainer">
                <div className="forminput">
                    <label htmlFor="formname">Name:</label><br />
                    <input type="text" placeholder='Name' id='formname' required />
                </div>
                <div className="forminput">
                    <label htmlFor="formemail">Email:</label><br />
                    <input type="text" placeholder='Email' id='formemail' /></div>
                <div className="forminput">
                    <div className="radiobtnmessage">Are you Already a member?</div>
                    <input type="radio" name='member' id='formember'/>
                    <label style={{marginLeft:".4em"}} htmlFor="formember">Yes</label>
                    <input type="radio"style={{marginLeft:"2em"}} name='member' id='formember' />
                    <label style={{marginLeft:".4em"}} htmlFor="formember">No</label>
                </div>
                <div className="forminput">
                    <label htmlFor="formmessage">Message:</label><br />
                    <textarea name="formmessage" id="formmessage" ></textarea>
                    </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contactus