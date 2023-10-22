import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStaffSnake } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
        <p>
        <FontAwesomeIcon icon={faStaffSnake} className='header-icon'/>
        <span>Farmacias de Turno</span>
        </p>
    </header>
  )
}

export default Header