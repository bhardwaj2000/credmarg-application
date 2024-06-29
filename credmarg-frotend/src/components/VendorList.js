import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { Container, List, ListItem, ListItemText } from '@mui/material';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchVendors = async () => {
            const response = await api.get('/api/admin/vendors');
            setVendors(response.data);
        };
        fetchVendors();
    }, []);

    return (
        <Container>
            <h2>Vendors</h2>
            <List>
                {vendors.map(vendor => (
                    <ListItem key={vendor.id}>
                        <ListItemText primary={`${vendor.name} - ${vendor.email} - ${vendor.upi}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default VendorList;
