package com.yui.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yui.dao.nftsDAO;
import com.yui.models.NFT;
import com.yui.service.nftsService;

@Service
public class nftsImpl implements nftsService{
	
	@Autowired
	nftsDAO nftDao;
	
	@Override
	public List<NFT> findAll() {
		// TODO Auto-generated method stub
		return nftDao.findAll();
	}

	@Override
	public NFT findById(int id) {
		// TODO Auto-generated method stub
		return nftDao.findById(id).get();
	}

	@Override
	public NFT create(NFT nftModel) {
		// TODO Auto-generated method stub
		return nftDao.save(nftModel);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		nftDao.deleteById(id);
		
	}

}
