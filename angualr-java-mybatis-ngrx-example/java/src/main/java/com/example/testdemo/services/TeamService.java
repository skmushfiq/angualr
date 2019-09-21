package com.example.testdemo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.testdemo.data.mappers.TeamMapper;
import com.example.testdemo.domain.setting.Team;

@Service
public class TeamService {
	
	@Autowired
	private TeamMapper mapper;
	 
	private Team  createTeam(int id, String teamName) {
		return new Team() {{setId(id); setTeamName(teamName);}};
	}

	private List<Team> _repository=new ArrayList<Team>() {{
		add(createTeam(1,"Mumbai"));
		add(createTeam(2,"Pune"));
		add(createTeam(3,"Delhi"));
		add(createTeam(4,"Bangalore"));
	}};
	
	public List<Team> getAllTeams() throws Exception{
		return mapper.sellectAll();
		//return _repository;
		
	}

	public Team addTeam(Team team) throws Exception {
		mapper.insert(team);
//		int id = new Random().nextInt();
//		team.setId(Math.abs(id));
//		this._repository.add(team);
//		// TODO Auto-generated method stub
		return team;
	}
}
