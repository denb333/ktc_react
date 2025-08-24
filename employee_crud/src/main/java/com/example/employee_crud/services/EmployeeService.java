package com.example.employee_crud.services;

import com.example.employee_crud.config.PasswordUtil;
import com.example.employee_crud.dtos.EmployeeCreateRequest;
import com.example.employee_crud.dtos.EmployeeResponse;
import com.example.employee_crud.dtos.EmployeeUpdateRequest;
import com.example.employee_crud.entities.Employee;
import com.example.employee_crud.repositories.EmployeeJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {
    @Autowired
   private EmployeeJpaRepository employeeJpaRepository;

   public EmployeeResponse createEmployee(EmployeeCreateRequest request){
       if (employeeJpaRepository.existsByEmail(request.getEmail())) {
           throw new RuntimeException("Email already in use");
       }
       Employee employee = Employee.builder()
               .fullname(request.getFullName())
               .email(request.getEmail())
               .dateOfBirth(request.getDateOfBirth())
               .gender(request.getGender())
               .phoneNumber(request.getPhoneNumber())
               .active(request.getActive())
               .hashePassword(PasswordUtil.hashPassword(request.getPassword()))
               .createdAt(LocalDateTime.now())
               .updatedAt(LocalDateTime.now())
               .build();

       return toConvertDto(employeeJpaRepository.save(employee));
   }
   public EmployeeResponse getEmployeeById(Long id) {
       Employee employee = employeeJpaRepository.findById(id)
               .orElseThrow(()-> new RuntimeException("Employee not found"));
       return toConvertDto(employee);
   }
   public EmployeeResponse updateEmployee(Long id,EmployeeUpdateRequest request){
       Employee employee = employeeJpaRepository.findById(id)
               .orElseThrow(() -> new RuntimeException("Employee not found: " + id));
       employee.setFullname(request.getFullName());
       employee.setDateOfBirth(request.getDateOfBirth());
       employee.setGender(request.getGender());
       employee.setPhoneNumber(request.getPhoneNumber());
       employee.setActive(request.getActive());
       employee.setUpdatedAt(LocalDateTime.now());
       return toConvertDto(employeeJpaRepository.save(employee));
   }
   public void deleteEmployee(Long id) {
       if(!employeeJpaRepository.existsById(id)) {
           throw new RuntimeException("Employee not found: " + id);
       }
       employeeJpaRepository.deleteById(id);
   }
    public Page<EmployeeResponse> getAllEmployees(Pageable pageable) {
        return employeeJpaRepository.findAll(pageable)
                .map(this::toConvertDto);
    }
   private EmployeeResponse toConvertDto(Employee e){
       EmployeeResponse dto = new EmployeeResponse();
       dto.setId(e.getId());
       dto.setFullName(e.getFullname());
       dto.setEmail(e.getEmail());
       dto.setDateOfBirth(e.getDateOfBirth());
       dto.setGender(e.getGender());
       dto.setPhoneNumber(e.getPhoneNumber());
       dto.setActive(e.getActive());
       dto.setCreatedAt(e.getCreatedAt());
       dto.setUpdatedAt(e.getUpdatedAt());
       return dto;

   }
}
