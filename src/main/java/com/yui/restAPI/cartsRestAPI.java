package com.yui.restAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.Artwork;
import com.yui.models.Carts;
import com.yui.service.artworkService;
import com.yui.service.cartsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class cartsRestAPI {
	@Autowired
	 cartsService cartService;
	
	@GetMapping("/carts")
	public ResponseEntity<List<Carts>> getAll()
	{
		
		return ResponseEntity.ok(cartService.findAll());
	}
}
