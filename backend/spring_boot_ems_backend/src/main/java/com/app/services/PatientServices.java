package com.app.services;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.PatientDTO;
import com.app.entities.Users;

public interface PatientServices{

	PatientDTO addNewPatient(PatientDTO pdto);

	List<Users> getAllPatient_List();
	
	Users getPatientByID(Long Id);
	
	Users updatePatientById(Long Id, PatientDTO pdto);
	
	ApiResponse deletePatientById(Long Id);	
}
