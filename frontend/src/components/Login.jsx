import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: "\n        body{\n            background-image: url('/images/background_images.webp');\n            background-repeat: no-repeat;\n            background-position: center;\n            background-size: cover;\n        }\n\n        .login-box{\n            border: 5px solid;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 25%;\n            transform: translate(-50%, -50%);\n            padding: 15px;\n            \n        }\n" }} />
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="#" className="h1"><b>Login</b></a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="/auth/signin" method="post">
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" name="loginEmail" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" name="loginPassword" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              {/* <div className="social-auth-links text-center mt-2 mb-3">
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                </a>
              </div> */}
              {/* /.social-auth-links */}
              {/* <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p> */}
              <p className="mb-0 mt-4">
                <a className="text-center"><Link to="/register">Register a new membership</Link></a>
              </p>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.login-box */}
        {/* jQuery */}
        {/* Bootstrap 4 */}
        {/* AdminLTE App */}
      </div>

    )
  }
}

