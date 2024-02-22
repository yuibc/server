package com.yui.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Follow;

@Repository
public interface followsDAO extends JpaRepository<Follow,Integer>{

}
