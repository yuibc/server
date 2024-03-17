package com.yui.providers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yui.models.Artwork;
import com.yui.models.Cart;
import com.yui.repositories.CartRepository;
import com.yui.repositories.UserRepository;

@RestController
public class CartProvider {
    
    private final CartRepository repo;
    private final UserRepository userRepo;

    @Autowired
    public CartProvider(CartRepository repo, UserRepository userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }

    @PostMapping("/cart")
    public ResponseEntity<Long> add(@RequestParam long userId, @RequestBody Artwork artwork) {
        var user = userRepo.findById(userId).get();
        var cart = new Cart();
        cart.setArtwork(artwork);
        cart.setUser(user);
        repo.save(cart);
        return ResponseEntity.ok(userId);
    }
}
