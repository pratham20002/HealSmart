
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Base_page from './components/Base_page';
// import Login from './components/login';
// import Register from './components/register';
import Login from './components/Login';
import Register from './components/Register';
import VerifyEmail from './components/VerifyEmail';
import Admin_dashboard from './dashboard/admin/admin_dashboard';
import Base_dashboard from './dashboard/base_dashboard';
import AddEmployee from './dashboard/admin/AddEmployee';
import UpdateEmployee from './dashboard/admin/UpdateEmployee';


function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Base_page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/admin_dash" element={<Admin_dashboard />} />
        {/* <Route path="/base" element={<Base_dashboard />} /> */}
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
