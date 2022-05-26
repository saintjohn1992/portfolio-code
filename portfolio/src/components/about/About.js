import "./about.css";
import Dev from "../../img/dev.jpg";

const About = () =>  {
   return(
    <div className="a">
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={Dev} alt="" className="a-img" />
        </div>
    </div>
    <div className="a-right"></div>
</div>
   )
}

export default About;