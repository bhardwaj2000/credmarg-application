package com.credmarg.repository;

import com.credmarg.model.EmailRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRecordRepository extends JpaRepository<EmailRecord, Long> {
}
