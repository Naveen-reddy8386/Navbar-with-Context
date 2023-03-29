import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <Navbar />
          <div className={isDarkTheme ? 'bg-light' : 'bg-dark'}>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
            />
            <h1 className={isDarkTheme ? 'dark-not' : 'light-not'}>
              Lost your way?
            </h1>
            <p className={isDarkTheme ? 'dark-p' : 'light-p'}>
              We canot see page your looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
