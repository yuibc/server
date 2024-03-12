package com.yui.models;

import java.sql.Timestamp;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="artworks")
public class Artwork {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String url;
    private Double cryptoPrice;
    private Double convertedPrice;
    private String currency;
    private Boolean published;
    private Timestamp createdAt;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="category_id")
    private Category category;

    @OneToMany(mappedBy="artwork")
    private List<NFT> nfts;
}
