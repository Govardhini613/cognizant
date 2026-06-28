package com.cognizant.springtestingproject.service;

import com.cognizant.springtestingproject.model.User;
import com.cognizant.springtestingproject.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceMockitoTest {

    @Mock
    private UserRepository repository;

    @InjectMocks
    private UserService userService;

    @Test
    void testGetUserById() {

        User user = new User(1L, "Govardhini");

        when(repository.findById(1L)).thenReturn(Optional.of(user));

        User result = userService.getUserById(1L);

        assertEquals("Govardhini", result.getName());
    }
}