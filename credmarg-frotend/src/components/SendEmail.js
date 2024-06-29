import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { Checkbox, Button, Container, FormControlLabel, FormGroup } from '@mui/material';

const SendEmail = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            const response = await api.get('/api/admin/vendors');
            setVendors(response.data);
        };
        fetchVendors();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/api/admin/send-email', selectedVendors);
        alert('Emails sent successfully');
    };

    const handleCheckboxChange = (email) => {
        setSelectedVendors(prevState =>
            prevState.includes(email)
                ? prevState.filter(v => v !== email)
                : [...prevState, email]
        );
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    {vendors.map(vendor => (
                        <FormControlLabel
                            key={vendor.id}
                            control={<Checkbox checked={selectedVendors.includes(vendor.email)} onChange={() => handleCheckboxChange(vendor.email)} />}
                            label={`${vendor.name} (${vendor.email})`}
                        />
                    ))}
                </FormGroup>
                <Button type="submit" variant="contained" color="primary">Send Email</Button>
            </form>
        </Container>
    );
};

export default SendEmail;
