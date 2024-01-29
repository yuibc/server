package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="bookmarks")
public class Bookmark {
    private int id;
    private Artwork artwork;
    private User user;
    private Date timestamp;
}
