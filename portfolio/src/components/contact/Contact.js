import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";
import {FaRegPaperPlane} from "react-icons/fa"

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_anwos2o', 'template_jbkq1ut', formRef.current, '8_41URTN2BcbXs_fP')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your next project</h1>
                    <div className="c-info">
                        <div className="c-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +33.7.49.63.02.18
                        </div>
                        <div className="c-item">
                            <img src={Email} alt="" className="c-icon" />
                            saintjohnshane@outlook.com
                        </div>
                        <div className="c-item">
                            <img src={Address} alt="" className="c-icon" />
                            Paris, Ile de France
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What Project do you have in mind?</b> Let's get in touch.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <br />
                        <input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Subject" name="user_subect" />
                        <br />
                        <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button><FaRegPaperPlane /> Submit</button>
                        
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
    }

    export default Contact; 