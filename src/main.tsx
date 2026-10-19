import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from './lib/router';
import App from './App';
import './index.css';

// Opt in to scroll reveals only when JS runs (content stays visible otherwise).
document.documentElement.classList.add('js-motion');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>,
);
