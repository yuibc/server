package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "follows")
public class Follow {
    private int id;
    private User user;
    private User followingUser;
    private Date createdAt;
}
