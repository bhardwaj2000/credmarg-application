import React, { useState } from 'react';
import api from '../api/api';
import { TextField, Button, Container } from '@mui/material';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [ctc, setCtc] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/api/admin/employees', { name, designation, ctc, email });
        alert('Employee created successfully');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} fullWidth margin="normal" required />
                <TextField label="CTC" value={ctc} onChange={(e) => setCtc(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" required />
                <Button type="submit" variant="contained" color="primary">Create Employee</Button>
            </form>
        </Container>
    );
};

export default EmployeeForm;
