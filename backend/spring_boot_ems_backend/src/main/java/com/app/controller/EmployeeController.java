package com.app.controller;

import java.io.IOException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EmployeeDTO;
import com.app.services.EmployeeServices;


@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:3000")

public class EmployeeController {
	
	@Autowired 
	private EmployeeServices employeeServices;

	@PostMapping
	public ResponseEntity<?> addNewEmployee(@RequestBody @Valid EmployeeDTO dto){
		System.out.println("\n------------------------------------inside add new emp controller...........!\n" + dto.toString());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(employeeServices.addNewEmployee(dto));
	}
	
	@GetMapping(value = "/getById/{id}")
	public ResponseEntity<?> getEmpById(@PathVariable Long id) throws IOException
	{
		System.out.println(" \n----- Inside get emo by id controller ......! " + id);
		return ResponseEntity.ok(employeeServices.getEmpById(id));
	}
	
	@PutMapping(value = "/update/{id}")
	public ResponseEntity<?> updateEmployeeById(@PathVariable Long id, @RequestBody @Valid EmployeeDTO dto)throws IOException
	{
		System.out.println("Inside update emp in controller.....!");
		return ResponseEntity.ok(employeeServices.updateEmployeeById(id, dto));
	}
	
	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<?> deleteEmployeeById(@PathVariable Long id)
	{
		System.out.println("Inside Delete in Employee controller......!");
		return ResponseEntity.ok(employeeServices.deleteEmployeeById(id));
	}
	
	@GetMapping(value = "/getAllEmployee")
	public ResponseEntity<?> getAllEmployee()
	{
		System.out.println("Inside get all employee /.....!");
		return ResponseEntity.ok(employeeServices.getAllEmployee());
	}
	
	
}
