package com.yui.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Carts;

@Repository
public interface cartsDAO extends JpaRepository<Carts,Integer>{

}
