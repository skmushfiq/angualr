package com.example.testdemo.data.mappers;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.testdemo.domain.security.User;

@Mapper
public interface UserMapper {

	@Select("select u.userid id, u.userName, u.title from FieldForceDb.dbo.UserProfile u inner join FieldForceDb.dbo.UserMembership m on m.userid=u.userid where u.username=#{username} and m.password=#{password}")
	User verifyUser(String username, String password);
}
