import React from 'react';
import { Link } from 'react-router-dom';

const Base_dashboard = ({ children }) => {
    return (
        <div className="wrapper hold-transition sidebar-mini">

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/admin_dash" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    <Link to={"/login"}><button className="btn btn-block btn-danger">Logout</button></Link>
                </ul>
            </nav>
            {/* /.navbar */}


            <div>
                {/* Main Sidebar Container */}
                <div>
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        {/* Brand Logo */}
                        <a href="#" className="brand-link">
                            <img src="dist/img/healSmart_logo.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-light">HealSmart</span>
                        </a>
                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user panel (optional) */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block">Mr Noob</a>
                                </div>
                            </div>
                            {/* SidebarSearch Form */}
                            <div className="form-inline">
                                <div className="input-group" data-widget="sidebar-search">
                                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-sidebar">
                                            <i className="fas fa-search fa-fw" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar Menu */}
                            <nav className="mt-2 ">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    <li className="nav-item">
                                        <Link to="/addEmployee" className="nav-link">
                                            <i className="fa fa-plus nav-icon"></i>
                                            <p>Add Employee</p>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            {/* /.sidebar-menu */}
                        </div>
                        {/* /.sidebar */}
                    </aside>
                </div>

                {children}


                <footer className="main-footer" >
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">Mr Noob</a>.</strong>
                    All rights reserved.
                </footer>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>

        </div>
    )
}
export default Base_dashboard;