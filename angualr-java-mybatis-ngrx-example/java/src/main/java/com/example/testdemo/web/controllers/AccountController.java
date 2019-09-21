package com.example.testdemo.web.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.testdemo.domain.security.LoginModel;
import com.example.testdemo.domain.security.UserPackage;
import com.example.testdemo.services.LoginService;
import com.example.testdemo.web.ApiResult;

@RequestMapping("/api/account")
@RestController
public class AccountController {

	@Autowired
	LoginService service;
	
	@RequestMapping("/login")
	public ResponseEntity<ApiResult<UserPackage>> Login(@RequestBody Optional<LoginModel> loginModel){
		ResponseEntity<ApiResult<UserPackage>> response=null;
		try {
			UserPackage pkg =service.login(loginModel.get());
			ApiResult<UserPackage> result=new ApiResult<UserPackage>();
			result.setResult(pkg);
			result.setSuccess(true);
			response = new ResponseEntity<ApiResult<UserPackage>>(result, HttpStatus.OK);
		}
		catch(Exception e) {
			response = new ResponseEntity<ApiResult<UserPackage>>(new ApiResult<UserPackage>() {{ 
				setException(e);
				setSuccess(false); 
				setMessage(e.getMessage());
				}}, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return response;
	}
}
