package com.yui.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="feedbacks")
public class Feedback {
    @Id
    private int id;
    private String email;
    private String content;
}
