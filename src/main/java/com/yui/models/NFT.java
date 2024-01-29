package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="nfts")
public class NFT {
    private int id;
    private String token;
    private Artwork artwork;
    private Date timestamp;
}
