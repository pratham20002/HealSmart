import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Base_dashboard from '../base_dashboard'
import employeeServices from '../../services/employeeServices';

const AddEmployee = () => {

    const navigate = useNavigate();

    const [values, getValues] = useState({

        first_name: "",
        last_name: "",
        contact: "",
        email: "",
        username: "",
        password: "",
        conformPassword: "",
        created_on: "",
        gender: "M",
        role_id: "",
        designation: "",
        date_of_birth: "",
        salary: null
    });

    const handleAdd = (e) => {
        e.preventDefault();

        console.log("------------ INside Handle Add.....!");
        employeeServices.addEmployee(values).then((resp) => {
            navigate("/admin_dash");
        }).catch((err) => console.log("--------------- Error occured while addEmployee .....!" + err));
    }


    return (

        <Base_dashboard>

            <div className='content-wrapper'>
                <div className="pt-3 justify-content-center row mx-auto" style={{ width: "90%" }}>
                    <div className='card card-primary'>
                        <div className="card-header">
                            <h3 className="card-title">Add Employee</h3>
                        </div>
                        <form onSubmit={handleAdd}>
                            <div className="card-body row">
                                <div className="form-group col-6">
                                    <label htmlFor="first_name_addEmployee">First Name</label>
                                    <input type="text" className="form-control" id="first_name_addEmployee" placeholder="Enter First Name" value={values.first_name} onChange={e => getValues({ ...values, first_name: e.target.value })} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="last_name_addEmployee">Last Name</label>
                                    <input type="text" className="form-control" id="last_name_addEmployee" placeholder="Enter Last Name" onChange={e => getValues({ ...values, last_name: e.target.value })} />
                                </div>

                                <div className="form-group col-12 mb-0">
                                    <label htmlFor="last_name_addEmployee">Contact</label>
                                </div>


                                <div className="input-group mb-3 col-2">
                                    <input type="tel" pattern="[+][0-9]{1,3}" className="form-control" placeholder="CC" name="mobile_cc" defaultValue="+91" required="" />
                                </div>
                                <div className="input-group mb-3 col-10">
                                    <input type="tel" pattern="[0-9]{10}" className="form-control" placeholder="Mobile Number" name="mobile" required="" onChange={e => getValues({ ...values, contact: e.target.value })} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-phone"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group col-6 mt-1">
                                    <label htmlFor="gender_addEmployee">Gender</label>
                                </div>
                                <div className="icheck-primary d-inline col-3">
                                    <input type="radio" id="radioPrimary1" name="r1" defaultChecked />
                                    <label htmlFor="radioPrimary1">Male
                                    </label>
                                </div>

                                <div className="icheck-warning d-inline col-2">
                                    <input type="radio" id="radioPrimary2" name="r1" />
                                    <label htmlFor="radioPrimary2">Female
                                    </label>
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="role_addEmployee">Role</label>
                                    <input type="text" className="form-control" id="role_addEmployee" placeholder="Enter Role" onChange={e => getValues({ ...values, role_id: e.target.value })} />
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputEmail1">Date of Birth</label>
                                    <div className="input-group date" id="dob_addEmployee" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" data-target="#reservationdate" onChange={e => getValues({ ...values, date_of_birth: e.target.value })} />
                                        <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                            <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={e => getValues({ ...values, email: e.target.value })} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="username_addEmployee">Username</label>
                                    <input type="text" className="form-control" id="username_addEmployee" placeholder="Enter Username" onChange={e => getValues({ ...values, username: e.target.value })} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="password_addEmployee">Password</label>
                                    <input type="password" className="form-control" id="password_addEmployee" placeholder="Enter password" onChange={e => getValues({ ...values, password: e.target.value })} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="repassword_addEmployee">Retype Password</label>
                                    <input type="password" className="form-control" id="repassword_addEmployee" placeholder="Retype password" onChange={e => getValues({ ...values, conformPassword: e.target.value })} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="designation_addEmployee">Designation</label>
                                    <input type="text" className="form-control" id="designation_addEmployee" placeholder="Enter designation" onChange={e => getValues({ ...values, designation: e.target.value })} />
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="salary_addEmployee">Salary</label>
                                    <input type="text" className="form-control" id="salary_addEmployee" placeholder="Enter salary" onChange={e => getValues({ ...values, salary: e.target.value })} />
                                </div>


                            </div>

                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Base_dashboard >

    )
}

export default AddEmployee