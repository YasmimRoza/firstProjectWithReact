import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from './shared/contexts';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components';

export function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>

        <MenuLateral>
          <AppRoutes />
        </MenuLateral>

      </BrowserRouter>
    </AppThemeProvider>
  );
}
