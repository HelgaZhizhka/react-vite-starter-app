import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/components/app';
import './styles/index.css';

const apiUrl = import.meta.env.VITE_API_URL;
console.log('API URL:', apiUrl);

const rootElement =
  document.querySelector('#root') ??
  ((): HTMLDivElement => {
    const element = document.createElement('div');
    element.id = 'root';
    document.body.append(element);
    return element;
  })();

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
