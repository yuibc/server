package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="nfts")
public class NFT {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String token;
    private Artwork artwork;
    private Date createdAt;
}
