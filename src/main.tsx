import React from 'react';
import ReactDOM from 'react-dom/client';

import { ContextProvider } from './contexts';
import App from './components/App';

import './css/reset.css';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
  <App />
</ContextProvider>
)
