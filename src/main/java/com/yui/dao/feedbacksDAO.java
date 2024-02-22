package com.yui.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Feedback;

@Repository
public interface feedbacksDAO extends JpaRepository<Feedback,Integer>{

}
