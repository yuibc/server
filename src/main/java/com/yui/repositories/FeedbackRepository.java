package com.yui.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
