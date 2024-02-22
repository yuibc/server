package com.yui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yui.dao.feedbacksDAO;
import com.yui.models.Feedback;
import com.yui.service.feedbackService;

@Service
public class feedbackImpl implements feedbackService{

	@Autowired
	feedbacksDAO feedbackDao;
	
	@Override
	public List<Feedback> findAll() {
		// TODO Auto-generated method stub
		return feedbackDao.findAll();
	}

	@Override
	public Feedback findById(int id) {
		// TODO Auto-generated method stub
		return feedbackDao.findById(id).get();
	}

	@Override
	public Feedback create(Feedback feedbackModel) {
		// TODO Auto-generated method stub
		return feedbackDao.save(feedbackModel);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		feedbackDao.deleteById(id);
		
	}

}
