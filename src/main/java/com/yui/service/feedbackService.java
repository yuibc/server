package com.yui.service;

import java.util.List;

import com.yui.models.Feedback;

public interface feedbackService {
	
	public List<Feedback> findAll();

	public Feedback findById(int id);

	public Feedback create(Feedback feedbackModel);

	public void delete(int id);
}
