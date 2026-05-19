package com.example.readingtracker.repository;

import com.example.readingtracker.model.Book;
import com.example.readingtracker.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    // 🔐 Get books for a specific user
    List<Book> findByUser(User user);
}