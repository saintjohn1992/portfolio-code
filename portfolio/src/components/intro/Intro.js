import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
return (
  <div className="i">
      <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name">Shane St. John</h1>
              <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Software Developer</div>
                      <div className="i-title-item">UI/UX Designer</div>
                      <div className="i-title-item">Web Developer</div>
                      <div className="i-title-item">Tech Enthusiast</div>
                  </div>
              </div>
              <p className="i-description">
                  I use my skills to design, develop, stylish modern websites, web services, and online stores
                  for customers. 
              </p>
          </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
      </div>
  </div>
  )
}

export default Intro;