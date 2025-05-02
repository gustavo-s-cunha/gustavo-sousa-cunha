import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CertificatesPage from '../pages/CertificatesPage';
import ProjectsPage from '../pages/ProjectsPage';
import HabilitsPage from '../pages/HabilitsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/habilits" element={<HabilitsPage />} />
    </Routes>
  );
};

export default AppRoutes;