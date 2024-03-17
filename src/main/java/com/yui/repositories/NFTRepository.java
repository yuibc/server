package com.yui.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yui.models.NFT;
import com.yui.models.User;

@Repository
public interface NFTRepository extends JpaRepository<NFT, Long> {
    public List<NFT> findByUser(User user);
}
