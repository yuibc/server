package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    private int id;
    private String email;
    private String displayName;
    private String password;
    private boolean isAdmin;
    private Date createdAt;
}
