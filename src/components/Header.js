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
                <br/>
                <br/>
                <p>A software engineer @ Amazon Web Services.</p>
                <p>A tech gadget lover.</p>
                <p>A gamer.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><button className="nav" onClick={() => {props.onOpenArticle('intro')}}>Intro</button></li>
                <li><button className="nav" onClick={() => {props.onOpenArticle('work')}}>Work</button></li>
                <li><button className="nav" onClick={() => {props.onOpenArticle('about')}}>About</button></li>
                <li><button className="nav" onClick={() => {props.onOpenArticle('contact')}}>Contact</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
