package com.yui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yui.dao.artworkDAO;
import com.yui.models.Artwork;
import com.yui.service.artworkService;

@Service
public class artworkImpl implements artworkService{

	@Autowired
	artworkDAO artDao;
	
	@Override
	public List<Artwork> findAll() {
		// TODO Auto-generated method stub
		return artDao.findAll();
	}

	@Override
	public Artwork findById(int id) {
		// TODO Auto-generated method stub
		return artDao.findById(id).get();
	}

	@Override
	public Artwork create(Artwork artModel) {
		// TODO Auto-generated method stub
		return artDao.save(artModel);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		artDao.deleteById(id);
		
	}

}
