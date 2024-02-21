package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.enums.RoleType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "employees")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Employee extends BaseEntity {

	@Column(name = "first_name", length = 30)
	private String first_name;

	@Column(name = "last_name", length = 30)
	private String last_name;

	@Column(name = "contact", length = 30)
	private String contact;

	@Column(name = "email", length = 30) // =>unique
	private String email;

	@Column(name = "password") // =>NOT NULL
	private String password;

	@Column(name="conform_password") // =>NOT NULL
	private String conformPassword;

	@Column(name = "gender", length = 30) // =>unique
	private String gender;

	@Column(name = "is_active")
	private boolean is_active;

	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate created_on;

	@Enumerated(EnumType.ORDINAL) // col : varchar => enum constant name
	@Column(name = "role_id", length = 10)
	private RoleType role_id;

	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate date_of_birth;

	@Column(name = "designation", length = 50)
	private String designation;

	@Column(name = "salary")
	private double salary;

//	List<Employee> emp_list = new ArrayList<Employee>();

//	// Employee HAS-A skills (string)
//	@ElementCollection // mandatory
//	@CollectionTable(name = "emp_skills", joinColumns = @JoinColumn(name = "emp_id"))
//	@Column(name = "skill_name", length = 20)
//	private List<String> skills = new ArrayList<>();
//	// one to many association between Employee 1--->* PaymentCard
//	@ElementCollection
//	@CollectionTable(name = "emp_payment_cards", 
//	joinColumns = @JoinColumn(name = "emp_id"))
//	private List<PaymentCard> cards = new ArrayList<>();

}
