import {Link} from 'react-router-dom'
import {Title} from '../../styledComponents'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-and-title-container">
      <div className="header-logo-container">
        <img
          src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636352771/TastyKitchens/Vector_2_vawqif.png"
          alt="Logo"
          className="header-logo"
        />
      </div>
      <Title display="block">Tasty Kitchens</Title>
    </div>

    <div>
      <ul className="header-menu-items">
        <Link to="/home" className="list-items">
          <li>Home</li>
        </Link>
        <Link to="/cart" className="list-items">
          <li>Cart</li>
        </Link>
        <Link to="/login">
          <button type="button" className="logout-button">
            <img
              src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636353031/TastyKitchens/Button_trxchp.png"
              alt="Logout"
            />
          </button>
        </Link>
      </ul>
    </div>
  </div>
)

export default Header
