package com.yui.service;

import java.util.List;

import com.yui.models.Carts;

public interface cartsService {
	public List<Carts> findAll();

	public Carts findById(int id);

	public Carts create(Carts cartsModel);

	public void delete(int id);
}
