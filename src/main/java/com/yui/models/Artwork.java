package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="artworks")
public class Artwork {
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
