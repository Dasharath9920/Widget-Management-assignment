import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextProvider } from './ContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
    // Strict mode is removed as DragDropContext doesn't support
    <ContextProvider>
      <App />
    </ContextProvider>
)
