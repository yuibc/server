package com.yui.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.Artwork;

@Repository
public interface ArtworkRepository extends JpaRepository<Artwork, Long> {
}
