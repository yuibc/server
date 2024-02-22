package com.yui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yui.dao.commentsDAO;
import com.yui.models.Comments;
import com.yui.service.commentsService;

@Service
public class commentsImpl implements commentsService{
	
	@Autowired
	commentsDAO commentDao;
	
	@Override
	public List<Comments> findAll() {
		// TODO Auto-generated method stub
		return commentDao.findAll();
	}

	@Override
	public Comments findById(int id) {
		// TODO Auto-generated method stub
		return commentDao.findById(id).get();
	}

	@Override
	public Comments create(Comments commentsModel) {
		// TODO Auto-generated method stub
		return commentDao.save(commentsModel);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		commentDao.deleteById(id);
		
	}

}
