package com.yui.models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String email;
    private String displayName;
    private String password;
    private String walletAddress;
    private Boolean isAdmin;
    private Date createdAt;
    private List<Artwork> artworks;
    private List<Comment> comments;
}
