package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.enums.RoleType;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class PatientDTO {

	@JsonProperty(access = Access.READ_ONLY) // used during serialization
	private Long patient_id;
	
	@NotBlank
	private String first_name;
	
	@NotBlank
	private String last_name;
	
	@NotBlank
	private String contact;
	
	@Email
	private String email;
	
	@NotBlank
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	@NotBlank
	@JsonProperty(access = Access.WRITE_ONLY)
	private String conformPassword;
	
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate created_on;
	
	@NotBlank
	private String gender;
	
	private boolean is_active;
	
//	private RoleType role_id;
	
	@DateTimeFormat(pattern = "yyyy-mm-dd") //added new | can be replaced by @JsonFormat with the same pattern : tested that also
	private LocalDate date_of_birth;

}
