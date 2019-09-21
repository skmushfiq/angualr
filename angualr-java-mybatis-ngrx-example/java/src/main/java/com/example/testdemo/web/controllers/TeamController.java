package com.example.testdemo.web.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.testdemo.domain.setting.Team;
import com.example.testdemo.services.TeamService;
import com.example.testdemo.web.ApiResult;

@RestController
@RequestMapping("/api/team")
public class TeamController {
	
	@Autowired
	private TeamService service;
	
	@RequestMapping("/getAllTeams")
	public ResponseEntity<ApiResult<List<Team>>> getAllTeams(){
		ResponseEntity<ApiResult<List<Team>>> response= null; 
		ApiResult<List<Team>> result=new ApiResult<List<Team>>();
		try {
			response = new ResponseEntity<ApiResult<List<Team>>>(result, HttpStatus.OK);
			result.setResult(service.getAllTeams());
			result.setSuccess(true);
			
		}
		catch(Exception ex) {
			result.setException(ex);
			response = new ResponseEntity<ApiResult<List<Team>>>(result, HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		return response;
	}
	
	@RequestMapping("/addTeam")
	public ResponseEntity<ApiResult<Team>> addTeam(@RequestBody Team team){
		ResponseEntity<ApiResult<Team>> response= null; 
		ApiResult<Team> result=new ApiResult<Team>();
		try {
			response = new ResponseEntity<ApiResult<Team>>(result, HttpStatus.OK);
			result.setResult(service.addTeam(team));
			result.setSuccess(true);
			
		}
		catch(Exception ex) {
			result.setException(ex);
			response = new ResponseEntity<ApiResult<Team>>(result, HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		return response;
	}
}
