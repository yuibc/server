package com.yui.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
