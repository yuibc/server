package com.yui.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Categories;

@Repository
public interface categoriesDAO extends JpaRepository<Categories,Integer>{

}
