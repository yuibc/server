package com.yui.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Follow;
import com.yui.models.User;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {
    public List<Follow> findByUser(User user);
}


