package com.yui.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Comments;

@Repository
public interface commentsDAO extends JpaRepository<Comments,Integer>{

}
