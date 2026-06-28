 package com.cognizant.springtestingproject.service;

import com.cognizant.springtestingproject.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public User getUserById(Long id) {
        return new User(id, "Govardhini");
    }
}