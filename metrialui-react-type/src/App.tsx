import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from './shared/contexts';
import { AppRoutes } from './routes';

export function App() {
  return (
    <AppThemeProvider
      themeName="light"
      toggleTheme={function (): void {
        throw new Error('Function not implemented.');
      }}
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
