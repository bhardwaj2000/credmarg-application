import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import VendorList from './components/VendorList';
import VendorForm from './components/VendorForm';
import SendEmail from './components/SendEmail';
import EmailList from './components/EmailList';

const App = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/employees">Employees</Button>
                    <Button color="inherit" component={Link} to="/vendors">Vendors</Button>
                    <Button color="inherit" component={Link} to="/send-email">Send Email</Button>
                    <Button color="inherit" component={Link} to="/emails">Sent Emails</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Routes>
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/employees/new" element={<EmployeeForm />} />
                    <Route path="/vendors" element={<VendorList />} />
                    <Route path="/vendors/new" element={<VendorForm />} />
                    <Route path="/send-email" element={<SendEmail />} />
                    <Route path="/emails" element={<EmailList />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
