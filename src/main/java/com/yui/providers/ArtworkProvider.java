package com.yui.providers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.Artwork;
import com.yui.repositories.ArtworkRepository;

@RestController
public class ArtworkProvider {

    private final ArtworkRepository repo;

    @Autowired
    public ArtworkProvider(ArtworkRepository repo) {
        this.repo = repo;
    }
    
    @GetMapping("/artworks")
    public List<Artwork> retrieveAll() {
        return repo.findAll();
    }
}
