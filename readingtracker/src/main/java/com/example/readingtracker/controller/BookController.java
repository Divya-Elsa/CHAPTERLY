package com.example.readingtracker.controller;

import com.example.readingtracker.model.Book;
import com.example.readingtracker.repository.BookRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class BookController {

    private final BookRepository repo;

    public BookController(BookRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("books", repo.findAll());
        return "index";
    }

    @GetMapping("/add")
    public String addForm(Model model) {
        model.addAttribute("book", new Book());
        return "add";
    }

    @PostMapping("/save")
    public String saveBook(@ModelAttribute Book book) {
        repo.save(book);
        return "redirect:/";
    }
}