package com.yui.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.NFT;

@Repository
public interface NFTRepository extends JpaRepository<NFT, Long> {
    
}
