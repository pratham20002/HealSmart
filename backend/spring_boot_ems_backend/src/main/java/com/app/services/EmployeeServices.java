package com.app.services;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.EmployeeDTO;
import com.app.entities.Employee;


public interface EmployeeServices {

//	get all employee remaining...!
	
	EmployeeDTO addNewEmployee(EmployeeDTO dto);
	
	Employee getEmpById(Long id);
	
	List<Employee> getAllEmployee();
	
	Employee updateEmployeeById(Long Id, EmployeeDTO dto);
	
	ApiResponse deleteEmployeeById(Long Id);
}
