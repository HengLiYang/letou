import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Home } from './src/index';

const container = document.getElementById('leTouRoot');
const root = ReactDOMClient.createRoot(container);
root.render(<Home />);
