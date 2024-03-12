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
    @Column(name="id", columnDefinition="integer")
    private Long id;

    @Column(name="email", columnDefinition="varchar(255)", unique = true)
    private String email;

    @Column(name="display_name", columnDefinition="varchar(50)")
    private String displayName;

    @Column(name="password", columnDefinition="varchar(50)")
    private String password;

    @Column(name="wallet_address", columnDefinition="varchar(MAX)")
    private String walletAddress;

    @Column(name="is_admin", columnDefinition="bit")
    private Boolean isAdmin;

    @Column(name="created_at", columnDefinition="timestamp")
    private Timestamp createdAt;
    
    @OneToMany(mappedBy="user")
    private List<Artwork> artworks;

    @OneToMany(mappedBy="user")
    private List<Comment> comments;

    @OneToMany(mappedBy="user")
    private List<Follow> follows;
}
