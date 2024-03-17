package com.yui.providers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.yui.repositories.CommentRepository;
import com.yui.repositories.UserRepository;

@RestController
public class CommentProvider {

    private final CommentRepository repo;
    private final UserRepository userRepo;

    @Autowired
    public CommentProvider(CommentRepository repo, UserRepository userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }
}
