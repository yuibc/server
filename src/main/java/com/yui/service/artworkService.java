package com.yui.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.yui.models.Artwork;


public interface artworkService {
	public List<Artwork> findAll();
	
	public Artwork findById(int id);
	
	public Artwork create(Artwork artModel);

	public void delete(int id);
}
