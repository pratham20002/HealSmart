import axios from "axios";

const base_url_employee = "http://localhost:8080/employees";

class EmployeeServiceFetch{

    getEmployeeById(id){
        console.log("------------------- inside get by id ----8-"+id);
        return axios.get(base_url_employee + "/getById/" + id);
    }

    updateEmployeeById(id, e)
    {
        console.log("------------------- inside update by id ----8-"+id + "   " + e);
        return axios.put(base_url_employee + "/update/" + id, e);
    }

    addEmployee(values)
    {
        return axios.post(base_url_employee, values);
    }
}

export default new EmployeeServiceFetch();