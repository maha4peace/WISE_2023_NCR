
import './App.css';
import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import OrderHistorypage from './pages/OrderHistoryPage';
import NewOrderPage from './pages/NewOrderPage';

function App() {

  const [user, setUser] = useState(null) ; 

  return (
    <main>
      { user ? 
          <NewOrderPage />
          :
          <AuthPage />
      }
      
    </main>
  );
}

export default App;
