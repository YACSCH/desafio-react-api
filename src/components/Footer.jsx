import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faUser }from '@fortawesome/free-solid-svg-icons'


 const Footer = () => {
  return (
    <footer>
      <ul className='footer-list'>
        <li className='footer-list-item'><a href="https://github.com/YACSCH" target="_blank"><FontAwesomeIcon icon={ faGithub }/></a></li>
        <li className='footer-list-item'><a href="https://www.linkedin.com/in/yamil-castillo-28522221/"  target="_blank"><FontAwesomeIcon icon={ faLinkedin }/></a></li>
        <li className='footer-list-item'><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={ faFacebook }/></a></li>
        <li className='footer-list-item'><a href="mailto:yamilcs@gmail.com" target="_blank"><FontAwesomeIcon icon={ faEnvelope }/></a></li>
      </ul>
      <p>Yamil Castillo Schmidt</p>
      <p>Octubre 2023</p>
    </footer>
  )
}
export default Footer;