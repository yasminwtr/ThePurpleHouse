
import Routes from 'services/routes';
import { AuthProvider } from './services/contexts/auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
