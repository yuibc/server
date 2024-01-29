package com.yui.models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="categories")
public class Category {
    private int id;
    private String display;
    private Date createdAt;
    private List<Artwork> artworks;
}
