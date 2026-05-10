package com.example.readingtracker.repository;

import com.example.readingtracker.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}