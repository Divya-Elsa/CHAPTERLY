package com.example.readingtracker.controller;

import com.example.readingtracker.model.Book;
import com.example.readingtracker.model.User;
import com.example.readingtracker.repository.BookRepository;
import com.example.readingtracker.repository.UserRepository;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    private final BookRepository bookRepository;
    private final UserRepository userRepository;

    public BookController(BookRepository bookRepository, UserRepository userRepository) {
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    // ✅ GET only logged-in user's books
    @GetMapping
    public List<Book> getBooks() {

        String username = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow();

        return bookRepository.findByUser(user);
    }

    // ✅ ADD book with user
    @PostMapping
    public Book addBook(@RequestBody Book book) {

        String username = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow();

        book.setUser(user);

        return bookRepository.save(book);
    }

    // ✅ GET single book (secure)
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {

        String username = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow();

        Book book = bookRepository.findById(id).orElseThrow();

        if (!book.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }

        return book;
    }

    // ✅ UPDATE (secure)
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book updated) {

        String username = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow();

        Book book = bookRepository.findById(id).orElseThrow();

        // 🔐 SECURITY CHECK
        if (!book.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }

        book.setTitle(updated.getTitle());
        book.setAuthor(updated.getAuthor());
        book.setTotalPages(updated.getTotalPages());
        book.setCurrentPage(updated.getCurrentPage());

        return bookRepository.save(book);
    }

    // ✅ DELETE (secure)
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable Long id) {

        String username = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow();

        Book book = bookRepository.findById(id).orElseThrow();

        // 🔐 SECURITY CHECK
        if (!book.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }

        bookRepository.delete(book);

        return "Book deleted successfully";
    }
}