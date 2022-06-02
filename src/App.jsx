import { lazy, Suspense } from 'react';
import {
  Route, Routes, Navigate, BrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import { TokenContext, useToken } from './context/TokenContext';

const Signup = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const User = lazy(() => import('./pages/User'));
const Groups = lazy(() => import('./pages/Groups'));

function App() {
  return (
    <BrowserRouter>
      <TokenContext.Provider value={useToken()}>
        <Header />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user/:username" element={<User />} />
            <Route path="/notfund" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notfund" />} />
          </Routes>
        </Suspense>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
