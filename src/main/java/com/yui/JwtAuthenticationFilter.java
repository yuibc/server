package com.yui;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import org.springframework.security.core.AuthenticationException;

import com.yui.providers.AuthProvider;
import com.yui.repositories.UserRepository;

import reactor.core.publisher.Mono;

@Component
public class JwtAuthenticationFilter implements WebFilter {

    private final AuthProvider provider;
    private final UserRepository repo;

    @Autowired
    public JwtAuthenticationFilter(AuthProvider provider, UserRepository repo) {
        this.provider = provider;
        this.repo = repo;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String token = exchange.getRequest().getHeaders().getFirst("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);
            if (provider != null && provider.validateToken(jwtToken)) { // Use JWTUtil if provided
                var userDetails = (UserDetails) repo.findById(0L).get();
                var authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                return chain.filter(exchange.mutate()
                        .context((context) -> context.setAuthentication(authentication))
                        .build());
            } else { // Or use Spring Security mechanisms for JWT validation
                return Mono.error(new Throwable("Invalid JWT token"));
            }
        }
        return chain.filter(exchange);    
    }


}