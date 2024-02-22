package com.yui.restAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.Feedback;
import com.yui.service.feedbackService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class feedbacksRestAPI {
	@Autowired
	feedbackService feedbackService;
	
	@GetMapping("/feedbacks")
	public ResponseEntity<List<Feedback>> getAll()
	{
		
		return ResponseEntity.ok(feedbackService.findAll());
	}
}
