package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="artworks")
public class Artwork {
    @Id
    private int id;
    private String title;
    private String description;
    private String url;
    private boolean published;
    private Date createdAt;
}
