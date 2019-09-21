package com.example.testdemo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testdemo.data.mappers.UserMapper;
import com.example.testdemo.domain.security.LoginModel;
import com.example.testdemo.domain.security.User;
import com.example.testdemo.domain.security.UserPackage;

@Service
public class LoginService {
	@Autowired
	UserMapper mapper;
	public UserPackage login(LoginModel model) throws Exception {
		User user=mapper.verifyUser(model.getUsername(), model.getPassword());
		if(user==null) throw new Exception("Invalid username or password");
		
//		if( model.getUsername()==null || model.getUsername().isEmpty() || model.getPassword()==null || model.getPassword().isEmpty()) throw new Exception("Invalid Username or Password");
		return new UserPackage() {{
			Calendar cal= Calendar.getInstance();
			cal.add(Calendar.DAY_OF_MONTH, -1);
			setLastLoginTime(cal.getTime()); 

			setUser(user);
		}};
	}
}
