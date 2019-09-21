package com.example.testdemo.data.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import com.example.testdemo.domain.setting.Team;

@Mapper
public interface TeamMapper {

    @Select("SELECT id as id, teamName as teamName FROM FieldForceDb.dbo.Team WHERE id = #{id}")
    Team selectOne(int id);

    @Select("SELECT id as id, teamName as teamName FROM FieldForceDb.dbo.Team")
    List<Team> sellectAll();

    @Insert("INSERT INTO FieldForceDb.dbo.team (teamName ) VALUES (#{teamName})")
    // Sets the object id to the id generated in database
    @Options(useGeneratedKeys = true, keyColumn = "id", keyProperty = "id")
    void insert(Team team);
}
