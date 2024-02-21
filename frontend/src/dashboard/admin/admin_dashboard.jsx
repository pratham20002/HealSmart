import React, { useState, useEffect } from 'react'
import Base_dashboard from '../base_dashboard'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin_dashboard = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("inside use effecr ............!");

    axios.get("http://localhost:8080/employees/getAllEmployee").then((res) => {
      
      setEmployees([...res.data]);
    })
    // loadEmployees();
  }, [])

  // const loadEmployees = async () => {
  //   await axios.get("http://localhost:8080/employees/getAllEmployee").then((resp)=>{
  //     console.log(resp.data);
  //     setEmployees([...resp.data]);
  //   });


  return (

    

    <Base_dashboard>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper" >
        {/* Main content */}
        < section className="content" >
          <div className="container-fluid ">

            <div className="row pt-2">
              <div className="col-lg-4 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>10</h3>
                    <p>Total Doctors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>

                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>2</h3>
                    <p>Total Receptionist</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>

                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="small-box bg-warning">
                  <div className="inner" >
                    <h3>20</h3>
                    <p >Total Pharmasist</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>

                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Details of Employees</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Salary</th>
                      <th>HireDate</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map(e =>
                      <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.first_name}</td>
                        <td>{e.email}</td>
                        <td>{e.role_id}</td>
                        <td>{e.salary}</td>
                        <td>{e.date_of_birth}</td>
                        <td>
                          <button className='btn btn-success'>View</button>
                          <Link to={`/updateEmployee/${e.id}`}><button className='ml-2 btn btn-primary'>Update</button></Link>
                          <button className='ml-2 btn btn-danger'>Delete</button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}

              <script>
                <div>
                  $(function () {'{'}
                  $("#example1")
                  .DataTable({'{'}
                  responsive: true,
                  lengthChange: false,
                  autoWidth: false,
                  buttons: ["excel", "pdf", "print", "colvis"],
                  {'}'})
                  .buttons()
                  .container()
                  .appendTo("#example1_wrapper .col-md-6:eq(0)");
                  {'}'});
                </div>

              </script>

            </div>
            {/* /.container-fluid */}
          </div>
        </section >
        {/* /.content */}
      </div >
      {/* /.content-wrapper */}

    </Base_dashboard>
  )
}

export default Admin_dashboard