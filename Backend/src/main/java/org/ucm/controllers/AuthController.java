package org.ucm.controllers;

import jakarta.validation.Valid;
import org.ucm.dto.RegisterRequest;
import org.ucm.models.User;
import org.ucm.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest request) {
        User user = userService.createUser(request.getUsername(), request.getEmail(), request.getPassword());
        return ResponseEntity.ok("User registered successfully! UserID: " + user.getId());
    }

}
