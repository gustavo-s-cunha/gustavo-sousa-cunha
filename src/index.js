import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';
import App from './App';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Cria o tema com a localização desejada
const theme = createTheme({}, ptBR);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
