package com.yui.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
