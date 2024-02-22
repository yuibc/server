package com.yui.restAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.Feedback;
import com.yui.models.NFT;
import com.yui.service.feedbackService;
import com.yui.service.nftsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class nftsRestAPI {
	@Autowired
	nftsService nftsService;
	
	@GetMapping("/nfts")
	public ResponseEntity<List<NFT>> getAll()
	{
		
		return ResponseEntity.ok(nftsService.findAll());
	}
	
}
