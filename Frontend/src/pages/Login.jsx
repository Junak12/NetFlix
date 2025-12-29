import React, { useState } from 'react'
import hero_banner from '../assets/background_banner.jpg'
import { login, signup } from '../firbase';

const Login = () => {

  const [hasSign, setHassign] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');



  const handleClick = () => {
    if (hasSign === 'Sign Up') {
      setHassign('Sign In');
    }
    else {
      setHassign('Sign Up');
    }
  }

  const user_auth = async(e) => {
    e.preventDefault();
    if (hasSign === 'Sign Up') {
      await signup(name, email, password);
    }
    else {
      await login(email, password);
    }
    setEmail('');
    setPassword('');
    setName('');
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${hero_banner})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form box */}
      <div className="relative z-10 w-full max-w-md bg-black/75 p-8 rounded-md">
        
        <h2 className="text-white text-3xl font-bold mb-6">
          {hasSign}
        </h2>

        <form className="space-y-4" onSubmit={user_auth}>
          {
            hasSign === 'Sign Up' ? (<input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />):<></>
          }

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
          >
            {hasSign}
          </button>
        </form>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-red-600" />
            Remember me
          </label>

          <p className="hover:underline cursor-pointer">
            Need Help?
          </p>
        </div>

        {/* Extra links */}
        <div className="mt-6 space-y-2 text-sm">
          {
            hasSign === 'Sign In' ? (          <p className="text-gray-400">
            New to Netflix?{' '}
            <span className="text-white hover:underline cursor-pointer" onClick={handleClick}>
              Sign Up Now
            </span>
          </p>):(          <p className="text-gray-400">
            Already have an account?{' '}
            <span className="text-white hover:underline cursor-pointer" onClick={handleClick}>
              Sign In
            </span>
          </p>)
          }
        </div>

      </div>
    </div>
  )
}

export default Login
