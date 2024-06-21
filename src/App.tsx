import RoutesProvider from './config/RoutesConfig';
import AuthenticationStateProvider from './service/AuthenticationService';


export default function App() {
  return (
    <AuthenticationStateProvider>
      <RoutesProvider />
    </AuthenticationStateProvider>
  );
}