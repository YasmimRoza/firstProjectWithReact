import { BrowserRouter } from 'react-router-dom'
import { AppRputes } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRputes/>
    </BrowserRouter>
  );
}

export default App;
