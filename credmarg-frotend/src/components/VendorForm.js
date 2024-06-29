import React, { useState } from 'react';
import api from '../api/api';
import { TextField, Button, Container } from '@mui/material';

const VendorForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [upi, setUpi] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/api/admin/vendors', { name, email, upi });
        alert('Vendor created successfully');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" required />
                <TextField label="UPI" value={upi} onChange={(e) => setUpi(e.target.value)} fullWidth margin="normal" required />
                <Button type="submit" variant="contained" color="primary">Create Vendor</Button>
            </form>
        </Container>
    );
};

export default VendorForm;
