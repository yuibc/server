package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "comments")
public class Comment {
    private int id;
    private String comment;
    private Date createdAt;
    private User user;
    private Comment commentParent;
}
