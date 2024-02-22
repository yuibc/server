package com.yui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yui.dao.usersDAO;
import com.yui.models.User;
import com.yui.service.usersService;

@Service
public class usersImpl implements usersService{
	
	@Autowired
	usersDAO userDAO;
	
	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userDAO.findAll();
	}

	@Override
	public User findById(int id) {
		// TODO Auto-generated method stub
		return userDAO.findById(id).get();
	}

	@Override
	public User create(User userModel) {
		// TODO Auto-generated method stub
		return userDAO.save(userModel);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		userDAO.deleteById(id);
		
	}

}
