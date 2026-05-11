package com.example.readingtracker.controller;

import com.example.readingtracker.model.Book;
import com.example.readingtracker.repository.BookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    private final BookRepository repo;

    public BookController(BookRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return repo.save(book);
    }

    // ✅ ADD THESE edit options↓↓↓

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return repo.findById(id).orElseThrow();
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book updated) {
        Book book = repo.findById(id).orElseThrow();

        book.setTitle(updated.getTitle());
        book.setAuthor(updated.getAuthor());
        book.setTotalPages(updated.getTotalPages());
        book.setCurrentPage(updated.getCurrentPage());

        return repo.save(book);
    }
}