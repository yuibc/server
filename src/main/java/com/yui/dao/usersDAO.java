package com.yui.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.User;

@Repository
public interface usersDAO extends JpaRepository<User,Integer>{

}
