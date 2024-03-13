package com.yui.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
