package com.example.readingtracker.model;

import jakarta.persistence.*;
import lombok.Data;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private int totalPages;
    private int currentPage;

    // 🔗 MANY books → ONE user
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore   // 🔥 IMPORTANT: prevents infinite loop in JSON
    private User user;
}