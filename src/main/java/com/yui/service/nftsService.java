package com.yui.service;

import java.util.List;

import com.yui.models.NFT;

public interface nftsService {
	
	public List<NFT> findAll();

	public NFT findById(int id);

	public NFT create(NFT nftModel);

	public void delete(int id);
}
