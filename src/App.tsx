import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Callback from './pages/Callback';
import Layout from './components/Layout';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  return accessToken ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={accessToken ? <Navigate to="/dashboard" /> : <Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;