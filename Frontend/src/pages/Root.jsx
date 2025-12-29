import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useNavigate, useLocation } from 'react-router';
import hero_banner from '../assets/hero_banner.jpg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firbase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Redirect unauthenticated users to /login
      if (!user && location.pathname !== '/login') {
        navigate('/login');
      }
      // Redirect logged-in users away from /login
      else if (user && location.pathname === '/login') {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate, location]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="pt-20 flex-1">
        <div
          style={{ backgroundImage: `url(${hero_banner})` }}
          className="relative min-h-screen bg-cover bg-center px-8"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/60 to-black"></div>

          {/* Routed content */}
          <div className="relative z-10">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-5 px-8">
        <Footer />
      </div>

      {/* Toast container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Root;
