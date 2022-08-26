import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.scss';
import Home from './pages/Home';
import { AppProvider } from './contexts/AppContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppProvider>
            <Home />
        </AppProvider>
    </React.StrictMode>
);