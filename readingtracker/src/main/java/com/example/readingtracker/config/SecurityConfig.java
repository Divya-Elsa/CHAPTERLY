package com.example.readingtracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity   // ✅ ADD THIS
public class SecurityConfig {

    private final JwtFilter jwtFilter;

    public SecurityConfig(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            // 🔐 Disable CSRF (needed for APIs)
            .csrf(csrf -> csrf.disable())

            // 🌐 Enable CORS (important for React frontend)
            .cors(cors -> {})

            .authorizeHttpRequests(auth -> auth
                    // ✅ Allow login & register
                    .requestMatchers("/auth/**").permitAll()

                    // 🔒 Everything else needs JWT
                    .anyRequest().authenticated()
            )

            // 🔐 Add JWT filter before default auth filter
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}