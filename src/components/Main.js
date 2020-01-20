import pic_intro from 'images/intro.jpg'
import pic_work from 'images/work.jpg'
import pic_about from 'images/about.jpg'
import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <button
        className="close"
        onClick={() => {this.props.onCloseArticle()}}
      >
      </button>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic_intro} alt="" />
          </span>
          <p>
            Hi, I am Drew, welcome to my world! Here you can find a lot of things from different aspects that you might
            find interesting or even helpful.
            <br/>
            <br/>
            <a href="https://techhive.drewwei.com">At Dreezy's Tech Hive</a> you can find all the tech-related stuff I
            put up. Ranging from coding guides to tech gadget reviews. Sometimes I put on my software engineer hat when
            writing stuff, and sometimes I am just a normal person that likes tech.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic_work} alt="" />
          </span>
          <p>
            I am a software engineer at work, currently working at Amazon Web Services.
          </p>
          <p>
            My primary programming language is Java, and I have built web services using RPC and REST (some are
            serverless), long-running workflows, so on and so forth. My main area of interests is on the backend side,
            but as serverless architecture is more and more popular, I am also trying to get my hands dirty with the
            front-end side of the world.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic_about} alt="" />
          </span>
          <p>
            I graduated from Georgia Institute of Technology with a Master's degree in Computer Science, and started
            working at Amazon Web Services as a software engineer in 2015.
          </p>
          <p>
            At my leisure, I play my PS4 Pro and Nintendo Switch on a 135-inch projector screen in my home theater, with
            a 5.1 surround sound system and a 4K smart projector.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/DreezyWei" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/unkdrew" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/drew-wei" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/unkdrew" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
