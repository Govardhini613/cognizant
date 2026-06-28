package com.cognizant.springtestingproject.controller;

import com.cognizant.springtestingproject.model.User;
import com.cognizant.springtestingproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {

        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);

    }
}