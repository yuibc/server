package com.yui.providers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.Category;
import com.yui.repositories.CategoryRepository;

@RestController
public class CategoryProvider {

    private final CategoryRepository repo;

    @Autowired
    public CategoryProvider(CategoryRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> retrieveAll() {
        return ResponseEntity.ok(repo.findAll());
    }
    
}
