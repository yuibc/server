package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="comments")
public class Comments {
	@Id
	private int id;
	private String comment;
	private int user_id;
	private int comment_parent_id;
	private Date created_at;
}
