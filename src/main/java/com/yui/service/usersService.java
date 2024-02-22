package com.yui.service;

import java.util.List;

import com.yui.models.User;

public interface usersService {
	
	public List<User> findAll();

	public User findById(int id);

	public User create(User userModel);

	public void delete(int id);
}
