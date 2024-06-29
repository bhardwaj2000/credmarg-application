package com.credmarg.service;

import com.credmarg.model.EmailRecord;
import com.credmarg.repository.EmailRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailService {

    @Autowired
    private EmailRecordRepository emailRecordRepository;

    public void sendEmail(String content) {
        EmailRecord emailRecord = new EmailRecord();
        emailRecord.setEmailContent(content);
        emailRecordRepository.save(emailRecord);

        // Mock email sending by printing to console
        System.out.println("Sending email: " + content);
    }

    public List<EmailRecord> getAllSentEmails() {
        return emailRecordRepository.findAll();
    }
}
