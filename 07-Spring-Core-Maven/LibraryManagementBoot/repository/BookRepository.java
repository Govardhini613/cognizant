package com.library.LibraryManagementBoot.repository;

import com.library.LibraryManagementBoot.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}