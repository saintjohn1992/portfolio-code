import "./about.css";
import Dev from "../../img/dev.jpg";
import Cert from "../../img/certificate.png";

const About = () =>  {
   return(
    <div className="a">
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={Dev} alt="" className="a-img" />
        </div>
    </div>
    <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Web / Software Developer
        </p>
        <p className="a-desc">
            Innovative, task driven professional with experience in 
            web design and development. Able to consistently identify and provide 
            the technological needs of clients through innovation. I'm proficient in 
            creating user interfaces, writing, debugging code, troubleshooting simple/complex
            issues, and implementing new features based on user feedback.
        </p>
        <div className="a-cert">
            <img src={Cert} alt="" className="a-cert-img" />
            <div className="a-cert-texts">
                <h4 className="a-cert-title"> freeCodeCamp</h4>
                <p className="a-cert-desc">JavaScript Algorithms and Data Structures - 
                300 hour course.</p>
            </div>
            <div className="a-cert-texts">
                <h4 className="a-cert-title"> freeCodeCamp</h4>
                <p className="a-cert-desc">Responsive web design certification - 300 hour course.</p>
            </div>
            <div className="a-cert-texts">
                <h4 className="a-cert-title">freeCodeCamp</h4>
                <p className="a-cert-desc">Frontend dev
                libraries certification - 300 hour course.</p>
            </div>

        </div>
    </div>
</div>
   )
}

export default About;