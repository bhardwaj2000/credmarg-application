package com.credmarg.controller;

import com.credmarg.model.EmailRecord;
import com.credmarg.model.Employee;
import com.credmarg.model.Vendor;
import com.credmarg.service.EmailService;
import com.credmarg.service.EmployeeService;
import com.credmarg.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private VendorService vendorService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping("/vendors")
    public Vendor createVendor(@RequestBody Vendor vendor) {
        return vendorService.saveVendor(vendor);
    }

    @GetMapping("/vendors")
    public List<Vendor> getAllVendors() {
        return vendorService.getAllVendors();
    }

    @PostMapping("/send-email")
    public void sendEmailToVendors(@RequestBody List<String> vendorEmails) {
        List<Vendor> vendors = vendorService.getAllVendors();
        for (String email : vendorEmails) {
            Vendor vendor = vendors.stream().filter(v -> v.getEmail().equals(email)).findFirst().orElse(null);
            if (vendor != null) {
                String content = "Sending payments to vendor " + vendor.getName() + " at upi " + vendor.getUpi();
                emailService.sendEmail(content);
            }
        }
    }

    @GetMapping("/emails")
    public List<EmailRecord> getAllSentEmails() {
        return emailService.getAllSentEmails();
    }
}
