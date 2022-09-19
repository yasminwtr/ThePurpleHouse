
import Routes from './components/services/routes/index'
import { AuthProvider } from './components/contexts/auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
