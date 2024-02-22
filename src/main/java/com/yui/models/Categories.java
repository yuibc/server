package com.yui.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="categories")
public class Categories {
	@Id
	private int id;
	private String display;
	private String create_at;

}
