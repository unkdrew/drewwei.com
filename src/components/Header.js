import PropTypes from 'prop-types'
import React from 'react'

const Header = (props) => (
  <header id="header" style={props.timeout ? {display: 'none'} : {}}>
    <div className="logo">
      <span className="icon fa-coffee"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Drew Wei</h1>
        <p>A software engineer @ Amazon Web Services.</p>
        <br/>
        <a href="https://techhive.drewwei.com/" className="button icon fa-bug">Visit Dreezy's Tech Hive</a>
      </div>
    </div>
    <nav>
      <ul>
        <li className="nav" role='presentation' onClick={() => {props.onOpenArticle('intro')}} onKeyDown={() => {props.onOpenArticle('intro')}}>Intro</li>
        <li className="nav" role='presentation' onClick={() => {props.onOpenArticle('work')}} onKeyDown={() => {props.onOpenArticle('work')}}>Work</li>
        <li className="nav" role='presentation' onClick={() => {props.onOpenArticle('about')}} onKeyDown={() => {props.onOpenArticle('about')}}>About</li>
        <li className="nav" role='presentation' onClick={() => {props.onOpenArticle('contact')}} onKeyDown={() => {props.onOpenArticle('contact')}}>Contact</li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Header
