import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement: HTMLElement = document.getElementById('root')!;

import { Home } from './pages/home';

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
