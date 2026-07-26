package com.cognizant.accountservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.accountservice.model.Account;

@RestController
public class AccountController {

    @GetMapping("/account")
    public Account getAccount() {
        return new Account("123456789", "Savings", 50000);
    }
}