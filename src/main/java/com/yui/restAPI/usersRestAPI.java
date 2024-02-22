package com.yui.restAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.NFT;
import com.yui.models.User;
import com.yui.service.nftsService;
import com.yui.service.usersService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class usersRestAPI {
	@Autowired
	usersService userService;
	
	@GetMapping("/user")
	public ResponseEntity<List<User>> getAll()
	{
		
		return ResponseEntity.ok(userService.findAll());
	}
}
