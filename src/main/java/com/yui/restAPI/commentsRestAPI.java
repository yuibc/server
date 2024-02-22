package com.yui.restAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.Categories;
import com.yui.models.Comments;
import com.yui.service.categoriesService;
import com.yui.service.commentsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class commentsRestAPI {
	@Autowired
	commentsService commentService;

	@GetMapping("/comments")
	public ResponseEntity<List<Comments>> getAll() {

		return ResponseEntity.ok(commentService.findAll());
	}
}
