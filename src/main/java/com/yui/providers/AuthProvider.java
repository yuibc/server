package com.yui.providers;

import java.security.Key;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class AuthProvider {

    @Value("${JWT_SECRET}")
    private String secret;

    @Value("${JWT_EXP_TIME}")
    private String expirationTime;
    
    public String generateToken(Authentication authentication) {
        var userDetails = (UserDetails) authentication.getPrincipal();
        var now = new Date();
        var expiryDate = new Date(now.getTime() + expirationTime);
        return Jwts.builder()
            .subject(userDetails.getUsername())
            .issuedAt(now)
            .expiration(expiryDate)
            .signWith(getSigningKey())
            .compact();
    }

    public boolean validateToken(String token) {
        return false;
    }

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }
}
