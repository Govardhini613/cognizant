package com.cognizant.accountservice.service;

import org.springframework.stereotype.Service;

import com.cognizant.accountservice.model.Account;

@Service
public class AccountService {

    public Account getAccount() {
        return new Account("123456789", "Savings", 50000);
    }
}