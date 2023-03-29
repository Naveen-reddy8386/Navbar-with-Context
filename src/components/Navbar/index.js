import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChange = () => {
        toggleTheme()
      }
      return (
        <nav className={isDarkTheme ? 'Light' : 'Dark'}>
          {isDarkTheme ? (
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
            />
          ) : (
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
            />
          )}
          <ul>
            <Link to="/">
              <li className={isDarkTheme ? 'dark-txt' : 'light-txt'}>Home</li>
            </Link>

            <Link to="/about">
              <li className={isDarkTheme ? 'dark-txt' : 'light-txt'}>About</li>
            </Link>
          </ul>
          <button onClick={onChange} data-testid="theme">
            {isDarkTheme ? (
              <img
                className="b-logo"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              />
            ) : (
              <img
                className="b-logo"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              />
            )}
          </button>
        </nav>
      )
    }}
  </ThemeContext>
)
export default Navbar
