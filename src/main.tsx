import './app/styles/reset.css';
import './app/styles/main.css';

import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';

createRoot(document.getElementById('root')!).render(<App />);
