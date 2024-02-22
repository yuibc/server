package com.yui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yui.dao.cartsDAO;
import com.yui.models.Carts;
import com.yui.service.cartsService;

@Service
public class cartsImpl implements cartsService{

	@Autowired
	cartsDAO cartDao;
	
	@Override
	public List<Carts> findAll() {
		// TODO Auto-generated method stub
		return cartDao.findAll();
	}

	@Override
	public Carts findById(int id) {
		// TODO Auto-generated method stub
		return cartDao.findById(id).get();
	}

	@Override
	public Carts create(Carts cartsModel) {
		// TODO Auto-generated method stub
		return cartDao.save(cartsModel);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		cartDao.deleteById(id);
		
	}

}
