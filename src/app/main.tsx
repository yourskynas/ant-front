import { Theme } from '@radix-ui/themes';
import { StrictMode } from 'react';
import '@radix-ui/themes/styles.css';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
);
