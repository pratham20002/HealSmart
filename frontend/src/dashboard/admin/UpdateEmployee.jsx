import React, { useEffect, useState } from 'react'
import Base_dashboard from '../base_dashboard'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import employeeServices from '../../services/employeeServices';

const UpdateEmployee = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [values, getValues] = useState({

        id:null,
        first_name:"",
        last_name:"",
        contact:"",
        email:"",
        password:"",
        conformPassword:"",
        created_on:"",
        gender:"",
        role_id:"",
        designation:"",
        date_of_birth:"",
        salary:null
    });

    useEffect(()=>{
        employeeServices.getEmployeeById(id).then((resp)=>{
            console.log("----------- inside update use effect........"+ resp.data.first_name);

            getValues({...values, id:resp.data.id, first_name:resp.data.first_name, last_name:resp.data.last_name, 
            contact:resp.data.contact, email:resp.data.email, password:resp.data.password, conformPassword:resp.data.conformPassword,
            created_on:resp.data.created_on, gender:resp.data.gender, role_id:resp.data.role_id, designation:resp.data.designation,
            date_of_birth:resp.data.date_of_birth, salary:resp.data.salary});

            console.log("---------------- after values inserted in array.....!");
        }).catch(err=> {
            console.log("------------------ Error Occured WHile Updateing In Use Effect --------------------------"+err);
        })
    }, []);

    const handleUpdate=(e)=>{
        console.log("---------------- inside handle update............!");
        e.preventDefault();
        employeeServices.updateEmployeeById(id, values).then((err)=>{
            console.log("-----------------this is result handleUpdate: "+id);
            navigate('/admin_dash');
        }).catch(err=>{console.log("----------------------Error Occured while updating handleUpdate...!: "+err)});
    }

    return (

        <Base_dashboard>

            <div className='content-wrapper'>
                <div className="pt-3 justify-content-center row mx-auto" style={{ width: "90%" }}>
                    <div className='card card-primary'>
                        <div className="card-header">
                            <h3 className="card-title">Update Employee</h3>
                        </div>

                        <form onSubmit={handleUpdate}>
                            <div className="card-body row">
                                <div className="form-group col-6">
                                    <label htmlFor="first_name_addEmployee">First Name</label>
                                    <input type="text" value={values.first_name} className="form-control" id="first_name_addEmployee" onChange={e=> getValues({...values, first_name:e.target.value})} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="last_name_addEmployee">Last Name</label>
                                    <input type="text" value={values.last_name} className="form-control" id="last_name_addEmployee" onChange={e=> getValues({...values, last_name:e.target.value})} />
                                </div>

                                <div className="form-group col-12 mb-0">
                                    <label htmlFor="last_name_addEmployee">Contact</label>
                                </div>


                                <div className="input-group mb-3 col-2">
                                    <input type="tel" pattern="[+][0-9]{1,3}" className="form-control" placeholder="CC" name="mobile_cc" defaultValue="+91" required="" />
                                </div>
                                <div className="input-group mb-3 col-10">
                                    <input type="tel" value={values.contact} pattern="[0-9]{10}" className="form-control" placeholder="Mobile Number" name="mobile" required="" onChange={e=> getValues({...values, contact:e.target.value})}/>
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
                                    <input type="text" value={values.role_id} className="form-control" id="role_addEmployee" onChange={e=> getValues({...values, role_id:e.target.value})}/>
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputEmail1">Date of Birth</label>
                                    <div className="input-group date" id="dob_addEmployee" data-target-input="nearest">
                                        <input type="text" value={values.date_of_birth} className="form-control datetimepicker-input" data-target="#reservationdate" />
                                        <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                            <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" value={values.email} className="form-control" id="exampleInputEmail1" onChange={e=> getValues({...values, email:e.target.value})} />
                                </div>
                                {/* <div className="form-group col-6">
                                    <label htmlFor="username_addEmployee">Username</label>
                                    <input type="text" value={values.username} className="form-control" id="username_addEmployee" placeholder="Enter Username" />
                                </div> */}
                                <div className="form-group col-6">
                                    <label htmlFor="password_addEmployee">Password</label>
                                    <input type="password" value={values.password} className="form-control" id="password_addEmployee" onChange={e=> getValues({...values, password:e.target.value})} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="repassword_addEmployee">Retype Password</label>
                                    <input type="password" value={values.conformPassword} className="form-control" id="repassword_addEmployee" onChange={e=> getValues({...values, conformPassword:e.target.value})} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="designation_addEmployee">Designation</label>
                                    <input type="text" value={values.designation} className="form-control" id="designation_addEmployee" onChange={e=> getValues({...values, designation:e.target.value})} />
                                </div>

                                <div className="form-group col-6">
                                    <label htmlFor="salary_addEmployee">Salary</label>
                                    <input type="text" value={values.salary} className="form-control" id="salary_addEmployee" onChange={e=> getValues({...values, salary:e.target.value})} />
                                </div>


                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </Base_dashboard >
    )
}

export default UpdateEmployee