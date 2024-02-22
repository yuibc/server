package com.yui.service;

import java.util.List;

import com.yui.models.Comments;

public interface commentsService {
	public List<Comments> findAll();

	public Comments findById(int id);

	public Comments create(Comments commentsModel);

	public void delete(int id);
}
