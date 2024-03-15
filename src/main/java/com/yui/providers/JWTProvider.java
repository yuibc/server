package com.yui.providers;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.yui.models.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;

@Component
public class JWTProvider {

    @Value("${JWT_SECRET}")
    private String secret;

    @Value("${JWT_EXP_TIME}")
    private String expirationTime;

    private Key key;

    @PostConstruct
    public void init() {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateToken(User user) {
        var claims = new HashMap<String, Object>();
        claims.put("user", user.getId());
        return doGenerateToken(claims, user.getDisplayName());
    }

    public Boolean validateToken(String token) {
        return !isTokenExpired(token);
    }

    private String doGenerateToken(Map<String, Object> claims, String displayName) {
        var expirationTimeLong = Long.valueOf(expirationTime); //in second
        final var createdDate = new Date();
        final var expirationDate = new Date(createdDate.getTime() + expirationTimeLong * 1000);

        return Jwts.builder()
            .claims(claims)
            .subject(displayName)
            .issuedAt(createdDate)
            .expiration(expirationDate)
            .signWith(key)
            .compact();
    }

    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(key).build().parseClaimsJws(token).getBody();
    }

    public String getUsernameFromToken(String token) {
        return getAllClaimsFromToken(token).getSubject();
    }

    public Date getExpirationDateFromToken(String token) {
        return getAllClaimsFromToken(token).getExpiration();
    }
}
