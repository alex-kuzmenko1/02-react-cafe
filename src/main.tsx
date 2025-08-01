import React from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './components/App/App'; 
import './index.css';
import 'modern-normalize';
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);