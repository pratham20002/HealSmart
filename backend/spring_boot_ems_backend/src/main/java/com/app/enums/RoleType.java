package com.app.enums;

public enum RoleType {
	
	ANNONYNMOUS(0), DOCTOR(1), PATIENT(2), RECEPTIONIST(3), PHARMACIST(4);
	
	private int role_id;
	
	RoleType(int role_id)
	{
		this.role_id = role_id;
	}
	
	public int getRole_Id()
	{
		return this.role_id;
	}
}
