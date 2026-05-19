package com.example.readingtracker.controller;

import com.example.readingtracker.model.User;
import com.example.readingtracker.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    // 🔐 Password encoder
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // =========================
    // ✅ REGISTER API
    // =========================
    @PostMapping("/register")
    public String register(@RequestBody User user) {

        // Check username
        if (userRepository.existsByUsername(user.getUsername())) {
            return "Username already taken";
        }

        // Check email
        if (userRepository.existsByEmail(user.getEmail())) {
            return "Email already registered";
        }

        // Encrypt password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Save user
        userRepository.save(user);

        return "User registered successfully";
    }

    // =========================
    // ✅ LOGIN API
    // =========================
    @PostMapping("/login")
    public String login(@RequestBody User user) {

        // Find user by username
        User dbUser = userRepository.findByUsername(user.getUsername())
                .orElse(null);

        // User not found
        if (dbUser == null) {
            return "User not found";
        }

        // Verify password
        boolean passwordMatches = passwordEncoder.matches(
                user.getPassword(),
                dbUser.getPassword()
        );

        if (passwordMatches) {
            return "Login successful";
        } else {
            return "Invalid password";
        }
    }
}