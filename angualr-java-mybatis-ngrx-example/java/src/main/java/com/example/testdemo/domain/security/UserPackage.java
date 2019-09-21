package com.example.testdemo.domain.security;

import java.util.Date;

public class UserPackage {
	private User user;
	private Date lastLoginTime;
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Date getLastLoginTime() {
		return lastLoginTime;
	}
	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}
	
	
}
