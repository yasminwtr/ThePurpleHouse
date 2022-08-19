import '../src/components/Pages/Home/styles.css'
import Routes from './components/services/routes/app.routes';
import { AuthProvider } from './components/contexts/auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
