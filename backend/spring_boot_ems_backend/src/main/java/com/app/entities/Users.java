package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.enums.RoleType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Inheritance(strategy = InheritanceType.JOINED)
@Entity
@Table(name="users")
@Getter
@NoArgsConstructor
@Setter
//@ToString(exclude = { "emps" })
public class Users extends BaseEntity{
	
	@Column(name="first_name", length = 30)
	private String first_name;

	@Column(name="last_name", length = 30)
	private String last_name;
	
	@Column(name="contact", length = 30)
	private String contact;
	
	@Column(name="email", length = 30) // =>unique
	private String email;

	@Column(name="password", nullable = false) // =>NOT NULL
	private String password;
	
	@Column(name="conform_password", nullable = false) // =>NOT NULL
	private String conformPassword;
	
	@Column(name="gender", length = 30) // =>unique
	private String gender;
	
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate date_of_birth;
	
	@Column(name="is_active")
	private boolean is_active;
	
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate created_on;
	
//	@Enumerated(EnumType.STRING) // col : varchar => enum constant name
//	@Column(name="role_id", length = 10)
//	private RoleType role_id;

	
}

