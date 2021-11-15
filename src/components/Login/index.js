import {Component} from 'react'
import Cookies from 'js-cookie'
import {Title, Heading} from '../../styledComponents'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errormsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    let errorMessage
    if (errorMsg === "username and password didn't match") {
      errorMessage = 'Please enter a valid Username & Password'
    } else if (errorMsg === 'invalid username') {
      errorMessage = 'Invalid Username'
    }
    this.setState({errormsg: errorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errormsg} = this.state
    return (
      <div className="page-break">
        <div className="login-page-container">
          <div className="login-container">
            <img
              className="small-device-logo"
              src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636361249/TastyKitchens/Rectangle_1457_xcvbrc.png"
              alt="logo"
            />
            <div className="login-logo-container">
              <img
                className="large-device-logo"
                src="https://res.cloudinary.com/aishwaryaproject/image/upload/v1636352771/TastyKitchens/Vector_2_vawqif.png"
                alt="logo"
              />

              <Title display="none" align="center">
                Tasty Kitchens
              </Title>
              <Heading>Login</Heading>
              <form className="form" onSubmit={this.onSubmitForm}>
                <div className="login-form">
                  <label className="label" htmlFor="username">
                    USERNAME
                  </label>
                  <br />
                  <input
                    value={username}
                    type="text"
                    id="username"
                    className="input-container"
                    onChange={this.onChangeUsername}
                  />
                </div>

                <div className="login-form">
                  <label className="label" htmlFor="password">
                    password
                  </label>
                  <br />
                  <input
                    value={password}
                    type="password"
                    id="password"
                    className="input-container"
                    onChange={this.onChangePassword}
                  />
                </div>

                <div className="login-form">
                  <p className="error-msg">{errormsg}</p>
                </div>

                <div className="login-form">
                  <button className="login-button" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="image-container" />
      </div>
    )
  }
}

export default Login
