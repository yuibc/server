package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String comment;
    private Date createdAt;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JoinColumn(name="comment_parent_id")
    private Comment commentParent;
}
