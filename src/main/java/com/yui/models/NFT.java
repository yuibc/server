package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="nfts")
public class NFT {
    @Id
    private int id;
    private String token;
    private Date createdAt;
}
