package com.yui.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Artwork;

@Repository
public interface artworkDAO extends JpaRepository<Artwork, Integer>{

}
