package com.yui.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
}
