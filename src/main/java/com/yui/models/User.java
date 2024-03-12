package com.yui.models;

import java.sql.Timestamp;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
    @Column(name="id")
    private Long id;

    @Column(name="email")
    private String email;

    @Column(name="display_name")
    private String displayName;

    @Column(name="password")
    private String password;

    @Column(name="wallet_address")
    private String walletAddress;

    @Column(name="is_admin")
    private Boolean isAdmin;

    @Column(name="created_at")
    private Timestamp createdAt;
    
    @OneToMany(mappedBy="user")
    private List<Artwork> artworks;

    @OneToMany(mappedBy="user")
    private List<Comment> comments;

    @OneToMany(mappedBy="user")
    private List<Follow> follows;
}
