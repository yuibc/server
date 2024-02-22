package com.yui.service;

import java.util.List;

import com.yui.models.Follow;

public interface followService {
	
	public List<Follow> findAll();

	public Follow findById(int id);

	public Follow create(Follow followModel);

	public void delete(int id);
}
