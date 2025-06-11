import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from './components/ThemeProvider';
import { Home } from './pages/home';

const rootElement: HTMLElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
