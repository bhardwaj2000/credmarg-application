import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { Container, List, ListItem, ListItemText } from '@mui/material';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await api.get('/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        fetchEmployees();
    }, []);

    return (
        <Container>
            <h2>Employees</h2>
            <List>
                {employees.map(employee => (
                    <ListItem key={employee.id}>
                        <ListItemText primary={`${employee.name} - ${employee.designation} - ${employee.ctc} - ${employee.email}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default EmployeeList;
