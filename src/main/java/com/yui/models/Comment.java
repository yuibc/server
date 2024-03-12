package com.yui.models;

import java.sql.Timestamp;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

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
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String comment;
    private Timestamp createdAt;

    @JdbcTypeCode(SqlTypes.JSON)
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JoinColumn(name="comment_parent_id")
    private Comment commentParent;
}
