package com.example.employee_crud.controllers;

import com.example.employee_crud.dtos.ApiResponse;
import com.example.employee_crud.dtos.EmployeeCreateRequest;
import com.example.employee_crud.dtos.EmployeeResponse;
import com.example.employee_crud.dtos.EmployeeUpdateRequest;
import com.example.employee_crud.entities.Employee;
import com.example.employee_crud.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<ApiResponse<EmployeeResponse>> create(@RequestBody EmployeeCreateRequest request){
        EmployeeResponse employee = employeeService.createEmployee(request);

        return ResponseEntity.ok(new ApiResponse<>(true, "Created successfully",employee));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> getAll(Pageable pageable) {
        Page<EmployeeResponse> page = employeeService.getAllEmployees(pageable);

        Map<String, Object> response = new HashMap<>();
        response.put("content", page.getContent());
        response.put("totalElements", page.getTotalElements());
        response.put("totalPages", page.getTotalPages());
        response.put("page", page.getNumber());
        response.put("size", page.getSize());

        return ResponseEntity.ok(new ApiResponse<>(true, "List successfully", response));
    }
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<EmployeeResponse>> getById(@PathVariable Long id){
        EmployeeResponse employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Found successfully",employee));
    }
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<EmployeeResponse>> update(@PathVariable Long id, @RequestBody EmployeeUpdateRequest request){
        EmployeeResponse employee = employeeService.updateEmployee(id, request);
        return ResponseEntity.ok(new ApiResponse<>(true, "Updated successfully",employee));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Deleted successfully",null));
    }
}
