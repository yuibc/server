package com.yui.providers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yui.enums.ResponseMessage;
import com.yui.models.NFT;
import com.yui.repositories.NFTRepository;
import com.yui.repositories.UserRepository;

@RestController
public class NFTProvider {
    
    private final NFTRepository repo;
    private final UserRepository userRepo;

    @Autowired
    public NFTProvider(NFTRepository repo, UserRepository userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }

    @GetMapping("/nfts")
    public ResponseEntity<List<NFT>> retrieveByUser(@RequestParam long userId) {
        var user = userRepo.findById(userId).get();
        var nfts = repo.findByUser(user);
        return ResponseEntity.ok(nfts);
    }

    @PostMapping("/nft/encrypt")
    public ResponseEntity<ResponseMessage> encrypt() {
        return ResponseEntity.ok(ResponseMessage.NFT_ENCRYPTED);
    }
}
