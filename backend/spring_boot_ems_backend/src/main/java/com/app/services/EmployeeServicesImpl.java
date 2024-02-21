package com.app.services;


import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.*;
//import com.app.custom_exceptions.IdNotFoundException;
import com.app.dao.EmployeeDao;
import com.app.dto.ApiResponse;
import com.app.dto.EmployeeDTO;
import com.app.entities.Employee;


@Service
@Transactional
public class EmployeeServicesImpl implements EmployeeServices{

	@Autowired
	private EmployeeDao emp_dao;
	
	@Autowired
	private ModelMapper mapper;
	
//	-------------- Add new Employee----------------------------
	@Override
	public EmployeeDTO addNewEmployee(EmployeeDTO dto){
		
		System.out.println("\n---------------------------- GetPass: "+dto.getPassword()+"\n-------------------------------- Get Re Pass: "+dto.getConformPassword());
		if(dto.getPassword().equals(dto.getConformPassword()))
		{
			Employee emp;
			Employee emp_obj = mapper.map(dto, Employee.class);
			return mapper.map(emp_dao.save(emp_obj), EmployeeDTO.class);
		}
		throw new ApiException("Password Not Match...!");
	}

	
//	-------------- Get Employee By ID ----------------------------
	@Override
	public Employee getEmpById(Long id) {
		Employee emp_by_id = emp_dao.findById(id).orElseThrow(()->new IdNotFoundException("Provided Id Not Found in Get By Id.....!"));
		return emp_by_id;
	}

	
//	-------------- Update Employee By Id ---------------------------
	@Override
	public Employee updateEmployeeById(Long Id, EmployeeDTO dto) {
		
		Employee e = emp_dao.findById(Id).orElseThrow(()-> new IdNotFoundException("Provided Id Not Found in Update Employee......!"));
		Employee updatedEmployee = mapper.map(dto, Employee.class);
		e.setFirst_name(updatedEmployee.getFirst_name());
		e.setLast_name(updatedEmployee.getLast_name());
		e.setContact(updatedEmployee.getContact());
		e.setEmail(updatedEmployee.getEmail());
		e.setPassword(updatedEmployee.getPassword());
		e.setConformPassword(updatedEmployee.getConformPassword());
		e.setCreated_on(updatedEmployee.getCreated_on());
		e.setGender(updatedEmployee.getGender());
		e.setRole_id(updatedEmployee.getRole_id());
		e.setDesignation(updatedEmployee.getDesignation());
		e.setDate_of_birth(updatedEmployee.getDate_of_birth());
		e.setSalary(updatedEmployee.getSalary());
		return updatedEmployee;
	}
	
	
//	-------------- Delete Employee By Id ---------------------------
	@Override
	public ApiResponse deleteEmployeeById(Long Id)
	{
		Employee e = emp_dao.findById(Id)
				.orElseThrow(()-> new IdNotFoundException("Provided Id Not Found in Delete Employee.....!"));
		emp_dao.delete(e);
		return new ApiResponse("Emp Deltails With ID: "+e.getId() + " --> Deleted Sucessfullly......!");
	}

// 	 ----------------------------- Get All Employee Details -------------------------
	@Override
	public List<Employee> getAllEmployee() {
		List<Employee> all_employee_list = emp_dao.findAll();
		return all_employee_list.stream().map(employee -> mapper.map(employee, Employee.class)).collect(Collectors.toList());
	}

}