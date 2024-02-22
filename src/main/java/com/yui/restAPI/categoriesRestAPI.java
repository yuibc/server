package com.yui.restAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.dao.categoriesDAO;
import com.yui.models.Carts;
import com.yui.models.Categories;
import com.yui.service.cartsService;
import com.yui.service.categoriesService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class categoriesRestAPI {
	@Autowired
	 categoriesService categoriesService;
	
	@GetMapping("/categories")
	public ResponseEntity<List<Categories>> getAll()
	{
		
		return ResponseEntity.ok(categoriesService.findAll());
	}
}
