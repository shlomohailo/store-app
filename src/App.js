
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/fechers/header/Header';
import Footer from './components/fechers/footer/Footer';
import Router from './routes/Router';
import UsersProvider from './contexts/user';

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <BrowserRouter>
          <Header />
          <Router />
          {/* <Footer /> */}
        </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
