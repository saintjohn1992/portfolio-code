import "./intro.css"

const Intro = () => {
return (
  <div className="intro">
      <div className="intro-left">
          <div className="intro-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name">Shane St. John</h1>
              <div className="intro-title">
                  <div className="intro-wrapper-title">
                      <div className="intro-title-item">Software Developer</div>
                      <div className="intro-title-item">UI/UX Designer</div>
                      <div className="intro-title-item">Web Developer</div>
                      <div className="intro-title-item">Fitness Fanatic</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="intro-right">
          <div className="intro-right-wrapper">

          </div>
      </div>
  </div>
  )
}

export default Intro;