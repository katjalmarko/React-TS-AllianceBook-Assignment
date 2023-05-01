import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CharacterContext.Provider value={{ allCharacters, setAllCharacters }}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

<CharacterContext.Provider value={{ allCharacters, setAllCharacters }}>
    {/* The existing JSX */}
  </CharacterContext.Provider>