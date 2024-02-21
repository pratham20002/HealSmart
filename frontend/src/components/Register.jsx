// import React, { Component } from 'react'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Register(){

  const [Registered_Values, set_Registered_Values] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    contact : "",
    gender : "",
    date_of_birth : ""
  })


  // Doing
  const handleRegister = (e) =>{
      e.preventDefault();

  }

 
    return (
      <form onSubmit={handleRegister}>
        <style dangerouslySetInnerHTML={{ __html: "\n          body{\n            background-image: url('/background_image.png');\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: cover;\n          }\n          .register-box{\n            border: 5px solid;\n          position: absolute;\n          top: 47%;\n          left: 50%;\n          width: 50%;\n          transform: translate(-50%, -50%);\n          padding: 10px;\n                  \n              }\n\n\n        " }} />
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="#" className="h1"><b>Register</b></a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form action="/auth/register" method="post" className="row">
                <div className="input-group mb-3 col-md-6">
                  <input type="text" className="form-control" id="registerFName" placeholder="First Name" name="registerFName" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3 col-md-6">
                  <input type="text" className="form-control" id="registerFName" placeholder="First Name" name="registerFName" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3 col-md-6">
                  <input type="text" className="form-control" id="registerFName" placeholder="username" name="registerFName" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3 col-md-6">
                  <input type="text" className="form-control" id='registerLName' placeholder="role" name="registerLName" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3 col-md-6">
                  <input type="text" className="form-control" id="registerFName" placeholder="Salary" name="registerFName" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 form-group">
                  <div className="input-group date" id="reservationdate" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" placeholder='HireDate' data-target="#reservationdate"/>
                      <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                          <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                      </div>
                  </div>
                </div>

                
                <div className="input-group mb-3  col-md-6 ">
                  <input type="email" className="form-control" placeholder="Email" name="registerEmail" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3 col-md-6">
                  <input type="password" className="form-control" placeholder="Password" name="registerPassword" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3 col-2">
                  <input type="tel" pattern="[+][0-9]{1,3}" className="form-control" placeholder="CC" name="mobile_cc" defaultValue="+91" required="" />
                </div>
                <div className="input-group mb-3 col-10">
                  <input type="tel" pattern="[0-9]{10}" className="form-control" placeholder="Mobile Number" name="mobile" required="" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone"></span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="row form-group clearfix">
                    
                    <label className='col-4 d-inline mt-1 ml-1' style={{color: '#848383'}}>gender</label>

                    <div className="icheck-primary d-inline">
                      <input type="radio" id="radioPrimary1" name="r1" defaultChecked />
                      <label htmlFor="radioPrimary1">Male
                      </label>
                    </div>

                    <div className="col-2 icheck-warning d-inline">
                      <input type="radio" id="radioPrimary2" name="r1" />
                      <label htmlFor="radioPrimary2">Female
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 form-group">
                  <div className="input-group date" id="reservationdate" data-target-input="nearest">
                      <input type="text" className="form-control datetimepicker-input" placeholder='Date of Birth' data-target="#reservationdate"/>
                      <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                          <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                      </div>
                  </div>
                </div>

                <div className="row col-12">
                  <div className="col-md-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" required />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                  </div>
                </div>
              </form>
              {/* <div className="social-auth-links text-center row">
                <div className=" col-md-6">
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2" />
                    Sign up using Facebook
                  </a>
                </div>
                <div className=" col-md-6">
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2" />
                    Sign up using Google+
                  </a>
                </div>
              </div> */}
              <a className="text-center mt-5"><Link to="/login">I already have a Account</Link></a>
            </div>
            {/* /.form-box */}
          </div>{/* /.card */}
        </div>
      </form>

    )

  }

