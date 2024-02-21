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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PatientDTO;
import com.app.services.PatientServices;

@RestController
@RequestMapping("/users/patients")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private PatientServices patientservices;
	
	@PostMapping
	public ResponseEntity<?> addNewPatient(@RequestBody @Valid PatientDTO pdto)
	{
		System.out.println("--------------- inside patient add new patient body...........!");
		return ResponseEntity.status(HttpStatus.CREATED).body(patientservices.addNewPatient(pdto));
	}
	
	@GetMapping(value = "/getAllPatient")
	public ResponseEntity<?> getAllPatient()
	{
		System.out.println("------------------ Inside get all patient body ............!");
		return ResponseEntity.ok(patientservices.getAllPatient_List());
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getPatientById(@PathVariable Long id)
	{
		System.out.println("--------------- inside patient find by id patient body...........!");
		return ResponseEntity.ok(patientservices.getPatientByID(id));
	}
	
	@PutMapping(value = "/update/{id}")
	public ResponseEntity<?> updateEmployeeById(@PathVariable Long id, @RequestBody @Valid PatientDTO pdto) throws IOException
	{
		System.out.println("--------------- inside patient update patient body...........!");
		return ResponseEntity.ok(patientservices.updatePatientById(id, pdto));
	}
	
	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<?> deleteEmployeeById(@PathVariable Long id)
	{
		System.out.println("------------= inside delete patient body ----------------");
		return ResponseEntity.ok(patientservices.deletePatientById(id));
	}
	
	
}
