package com.example.employee_crud.entities;

import com.example.employee_crud.enums.Gender;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 160)
    @Size(min = 4, max = 160, message = "Full Name must be between 4 and 160 characters")
    private String fullname;

    @Email(message = "Email should be valid")
    @Column(nullable = false, unique = true)
    private String email;

    private LocalDate dateOfBirth;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(length = 10)
    @Size(min = 10, max = 10, message = "Phone number must have 10 characters")
    private String phoneNumber;

    private Boolean active;
    private String hashePassword;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
