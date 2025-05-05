
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import useViewportHeight from './hooks/use-viewport-height.tsx'
import { SupabaseProvider } from './components/SupabaseProvider.tsx'

// Component that applies the viewport height fix
const ViewportHeightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useViewportHeight();
  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SupabaseProvider>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <ViewportHeightProvider>
          <App />
        </ViewportHeightProvider>
      </ThemeProvider>
    </SupabaseProvider>
  </React.StrictMode>,
)
