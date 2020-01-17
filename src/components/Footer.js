import PropTypes from 'prop-types'
import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; {new Date().getFullYear()} Drew Wei</p>
        <p className="copyright">Design: <a href="https://html5up.net">HTML5 UP</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
