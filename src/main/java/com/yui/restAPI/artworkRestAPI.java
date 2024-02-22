package com.yui.restAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.dao.artworkDAO;
import com.yui.models.Artwork;
import com.yui.service.artworkService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class artworkRestAPI {
	
	@Autowired
	artworkService artService;
	
	@GetMapping("/artwork")
	public ResponseEntity<List<Artwork>> getAll()
	{
		
		return ResponseEntity.ok(artService.findAll());
	}
}
