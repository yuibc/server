package com.yui.providers;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yui.enums.ResponseMessage;
import com.yui.models.Follow;
import com.yui.models.User;
import com.yui.repositories.FollowRepository;
import com.yui.repositories.UserRepository;

@RestController
public class FollowProvider {

    private final FollowRepository repo;
    private final UserRepository userRepo;

    @Autowired
    public FollowProvider(FollowRepository repo, UserRepository userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }

    @GetMapping("/follows")
    public ResponseEntity<List<Follow>> retrieveByUser(@RequestParam long userId) {
        var user = userRepo.findById(userId).get();
        var follows = repo.findByUser(user);
        return ResponseEntity.ok(follows);
    }

    @PostMapping("/user/{id}/follow")
    public ResponseEntity<ResponseMessage> follow(@RequestParam long id, @RequestBody User followUser) {
        var following = new Follow();
        var user = userRepo.findById(id).get();
        following.setUser(user);
        following.setFollowingUser(followUser);
        following.setCreatedAt(new Timestamp(19));
        repo.save(following);
        return ResponseEntity.ok(ResponseMessage.FOLLOWED);
    }
    
}
