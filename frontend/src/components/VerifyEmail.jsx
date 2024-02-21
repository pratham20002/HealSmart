import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class VerifyEmail extends Component {
    render() {
        return (
            <div className="lockscreen" style={{backgroundColor: 'transparent', color: 'white'}}>           
            <div className="lockscreen-wrapper" >
                <div className="lockscreen-logo">
                    <a href="%Public_Url%logo192.png"   style={{color: 'white'}}><b>HealSmart</b></a>
                </div>
                <div className="lockscreen-name" >Mr Noob</div>
                <div className="lockscreen-item">
                    <div className="lockscreen-image">
                        <img src="../../dist/img/user1-128x128.jpg" alt="User Image" />
                    </div>
                    <form className="lockscreen-credentials">
                        <div className="input-group">
                            <input type="number" className="form-control" placeholder="otp" />
                            <div className="input-group-append">
                                <Link to="/admin_dash">
                                    <button type="button" className="btn">
                                        <i className="mt-2 fas fa-arrow-right text-muted" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="help-block text-center">
                    Enter OTP Recieved On Your Mobile.
                </div>
                <div className="text-center">
                    <a href="login.html">Or Resend OTP</a>
                </div>
                <div className="lockscreen-footer text-center">
                    Copyright © 2014-2021 <b><a href="https://adminlte.io" className="text-black">Mr Noob</a></b><br />
                    All rights reserved
                </div>
                </div> 
            </div>

        )
    }
}
