package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ApiResponse {
	
	private LocalDate timeStamp;
	private String msg;
	
	public ApiResponse(String msg)
	{
		super();
		this.msg = msg;
		this.timeStamp = LocalDate.now();
	}
	
}
