package com.yui.service;

import java.util.List;

import com.yui.models.Carts;
import com.yui.models.Categories;

public interface categoriesService {
	public List<Categories> findAll();

	public Categories findById(int id);

	public Categories create(Categories categoriesModel);

	public void delete(int id);
}
