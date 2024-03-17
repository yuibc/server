package com.yui.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Follow;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {
}


