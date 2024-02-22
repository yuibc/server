package com.yui.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="carts")
public class Carts {
	@Id
	private int id;
	private String artwork_id;
	private int user_id;
	Date create_at;
}
