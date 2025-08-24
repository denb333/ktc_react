package com.example.employee_crud.dtos;

import com.example.employee_crud.enums.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeCreateRequest {
  private String fullName;
  private String email;
  private LocalDate dateOfBirth;
  private Gender gender;
  private String phoneNumber;
  private Boolean active;
  private String password;
}
