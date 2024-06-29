package com.credmarg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CredmargApplication {

	public static void main(String[] args) {
		SpringApplication.run(CredmargApplication.class, args);
	}

}
/*
* controller/
        - AdminController.java
    - model/
        - Employee.java
        - Vendor.java
        - EmailRecord.java
    - repository/
        - EmployeeRepository.java
        - VendorRepository.java
        - EmailRecordRepository.java
    - service/
        - EmailService.java
        - EmployeeService.java
        - VendorService.java*/