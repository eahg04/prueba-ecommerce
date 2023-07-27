/* ============================ IMPORTS ============================ */
//CSS
import './styles/Footer.css'
/* ======================================================================== */

const Footer = () => {
  return (
    <footer className='c-footer'>
      <h2 className='footer__title'>2023 Tennis S.A en reorganización</h2>
      <ul className='footer__list'>
        <li className='footer__item'>
          <a className='footer__icon-btn' href="https://www.linkedin.com/in/eahg04/" target='_blank'>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className='footer__item'>
          <a className='footer__icon-btn' href="https://www.tennis.com.co/sale?gclid=Cj0KCQjwiIOmBhDjARIsAP6YhSXJtU7zF7GAHMyOXjgZ-8Ws87dJwqgWcbFm8y9NTMi21nnfTcVoD5UaAgsgEALw_wcB" target='_blank'>
            <i className="fa-solid fa-briefcase"></i>
          </a>
        </li>
        <li className='footer__item'>
          <a className='footer__icon-btn' href="https://github.com/eahg04" target='_blank'>
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer