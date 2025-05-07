import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import { Divider } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Divider sx={{ my: 2 }} />
      <Footer />
    </Router>
  );
};

export default App;