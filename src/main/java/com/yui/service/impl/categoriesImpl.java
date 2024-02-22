package com.yui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yui.dao.categoriesDAO;
import com.yui.models.Categories;
import com.yui.models.Comments;
import com.yui.service.categoriesService;
import com.yui.service.commentsService;

@Service
public class categoriesImpl implements categoriesService{

	@Autowired
	categoriesDAO categoriesDAO;

	@Override
	public List<Categories> findAll() {
		// TODO Auto-generated method stub
		return categoriesDAO.findAll();
	}

	@Override
	public Categories findById(int id) {
		// TODO Auto-generated method stub
		return categoriesDAO.findById(id).get();
	}

	@Override
	public Categories create(Categories categoriesModel) {
		// TODO Auto-generated method stub
		return categoriesDAO.save(categoriesModel);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		categoriesDAO.deleteById(id);
		
	}
	
	
	
}
