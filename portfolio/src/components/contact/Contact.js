import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your next project</h1>
                    <div className="c-info">
                        <div className="c-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +33-7-49-63-02-18
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
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <br />
                        <input type="text" placeholder="Subject" name="user_subect" />
                        <br />
                        <input type="email" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
    }

    export default Contact; 