package com.cognizant.springtestingproject.repository;

import com.cognizant.springtestingproject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}