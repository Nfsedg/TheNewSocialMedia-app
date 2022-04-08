import {
  Route, Routes, Navigate, BrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header/Header';
import User from './pages/User';
import Groups from './pages/Groups';
import { TokenContext, useToken } from './context/TokenContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TokenContext.Provider value={useToken()}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notfund" element={<NotFound />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="*" element={<Navigate to="/notfund" />} />
        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
