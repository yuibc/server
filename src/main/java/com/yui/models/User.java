package com.yui.models;

import java.sql.Timestamp;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String displayName;
    private String password;
    private String walletAddress;
    private Boolean isAdmin;
    private Timestamp createdAt;

    @OneToMany(mappedBy="user", fetch=FetchType.EAGER)
    private List<Artwork> artworks;

    @OneToMany(mappedBy="user", fetch=FetchType.EAGER)
    private List<Comment> comments;

    @OneToMany(mappedBy="user", fetch=FetchType.EAGER)
    private List<Follow> follows;
}
