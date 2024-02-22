package com.yui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yui.dao.followsDAO;
import com.yui.models.Follow;
import com.yui.service.followService;

@Service
public class followImpl implements followService{

	@Autowired
	followsDAO followsDAO;
	
	@Override
	public List<Follow> findAll() {
		// TODO Auto-generated method stub
		return followsDAO.findAll();
	}

	@Override
	public Follow findById(int id) {
		// TODO Auto-generated method stub
		return followsDAO.findById(id).get();
	}

	@Override
	public Follow create(Follow followModel) {
		// TODO Auto-generated method stub
		return followsDAO.save(followModel);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		followsDAO.deleteById(id);
		
	}

}
