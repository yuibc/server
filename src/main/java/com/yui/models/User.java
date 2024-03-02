package com.yui.models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {
    private int id;
    private String email;
    private String displayName;
    private String password;
    private String walletAddress;
    private boolean isAdmin;
    private Date createdAt;
    private List<Artwork> artworks;
    private List<Comment> comments;
}
