package com.yui.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="feedbacks")
public class Feedback {
    private int id;
    private String email;
    private String content;
}
