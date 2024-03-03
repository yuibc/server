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
@Table(name="artworks")
public class Artwork {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String title;
    private String description;
    private String url;
    private double cryptoPrice;
    private double convertedPrice;
    private String currency;
    private boolean published;
    private Date createdAt;
    private User user;
    private Category category;
}
