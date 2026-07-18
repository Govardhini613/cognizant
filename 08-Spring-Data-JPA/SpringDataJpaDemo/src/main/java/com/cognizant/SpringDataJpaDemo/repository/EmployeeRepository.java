package com.cognizant.SpringDataJpaDemo.repository;

import com.cognizant.SpringDataJpaDemo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}