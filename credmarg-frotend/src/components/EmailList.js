import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { Container, List, ListItem, ListItemText } from '@mui/material';

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            const response = await api.get('/api/admin/emails');
            setEmails(response.data);
        };
        fetchEmails();
    }, []);

    return (
        <Container>
            <h2>Sent Emails</h2>
            <List>
                {emails.map(email => (
                    <ListItem key={email.id}>
                        <ListItemText primary={email.emailContent} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default EmailList;
