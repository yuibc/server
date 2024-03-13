package com.yui.providers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.User;
import com.yui.repositories.UserRepository;

@RestController("/api/v1")
public class UserProvider {

    private final UserRepository repo;

    public UserProvider(UserRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/users")
    public List<User> retrieveAll() {
        return repo.findAll();
    }

    @PostMapping("/user")
    public int createUser(@RequestBody User user) {
        return repo.save(user).getId();
    }

    @GetMapping("/user/{id}")
    public User findById(@PathVariable int id) {
        return repo.findById(id).get();
    }
}
