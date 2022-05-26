import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
return (
  <div className="intro">
      <div className="intro-left">
          <div className="intro-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name">Shane St. John</h1>
              <div className="intro-title">
                  <div className="intro-title-wrapper">
                      <div className="intro-title-item">Software Developer</div>
                      <div className="intro-title-item">UI/UX Designer</div>
                      <div className="intro-title-item">Web Developer</div>
                      <div className="intro-title-item">Fitness Fanatic</div>
                  </div>
              </div>
              <p className="intro-description">
                  I use my skills to design, develop, stylish modern websites, web services, and online stores
                  for customers. 
              </p>
          </div>
      </div>
      <div className="intro-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
      </div>
  </div>
  )
}

export default Intro;