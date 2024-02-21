package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.IdNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.PatientDTO;
import com.app.entities.Users;

@Service
@Transactional
public class PatientServicesImpl implements PatientServices{

	@Autowired
	private UserDao user_dao;
	
	@Autowired
	private ModelMapper mapper;
	
	
//	------------------------------- add new patient ---------------------------------
	@Override
	public PatientDTO addNewPatient(PatientDTO pdto) {
		
		System.out.println("----------------- inside addnew patient impl mmethods.....! "+pdto.toString());
		if(pdto.getPassword().equals(pdto.getConformPassword()))
		{
			System.out.println("----------------- Psasword matches.....!");
			Users user_obj = mapper.map(pdto, Users.class);
			System.out.println("=---------------------- after mapper ..............!" + user_obj);
			return mapper.map(user_dao.save(user_obj), PatientDTO.class);
		}
		
		throw new ApiException("Password doesen't match.................!");
	}
	
//	-------------------------------- get all patient-------------------------------------------
	@Override
	public List<Users> getAllPatient_List() {
//		Pagination remaning page number, page size
		List<Users> all_users_list = user_dao.findAll(); // check code here...! incpmo this line
		
		return all_users_list.stream().map(user-> mapper.map(user, Users.class)).collect(Collectors.toList());
	}
	
// --------------------------------- get patient by id--------------------------------
	@Override
	public Users getPatientByID(Long Id) {
		Users user_by_id_details = user_dao.findById(Id).orElseThrow(()-> new IdNotFoundException("provided id is not found......!"));
		return user_by_id_details;
	}

	
//	------------------------------- update patient by id ------------------------------
	@Override
	public Users updatePatientById(Long Id, PatientDTO pdto) {
		
		Users userTemp = user_dao.findById(Id).orElseThrow(()-> new IdNotFoundException("Provided id not found.............!"));
		Users updatedUser = mapper.map(pdto, Users.class);
//		updatedUser.setId(pdto.getPatient_id());
		userTemp.setFirst_name(updatedUser.getFirst_name());
		userTemp.setLast_name(updatedUser.getLast_name());
		userTemp.setContact(updatedUser.getContact());
		userTemp.setEmail(updatedUser.getEmail());
		userTemp.setPassword(updatedUser.getPassword());
		userTemp.setConformPassword(updatedUser.getConformPassword());
		userTemp.setCreated_on(updatedUser.getCreated_on());
		userTemp.setGender(updatedUser.getGender());
		userTemp.setDate_of_birth(updatedUser.getDate_of_birth());
		return updatedUser;
	}

//	------------------------------ delete patient by id ----------------------------------
	@Override
	public ApiResponse deletePatientById(Long Id) {
		Users u = user_dao.findById(Id).orElseThrow(()-> new IdNotFoundException("Provided id not found.............!"));
		user_dao.delete(u);
		return new ApiResponse("Patient Details with id "+u.getId() + " ---> Deleted Sucessfully....!");
	}
	
	
}