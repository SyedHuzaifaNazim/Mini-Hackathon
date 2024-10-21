'use client'
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebaseConfig';
import { setDoc, doc } from 'firebase/firestore'; 

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('member');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setUsername(''); 
    setEmail(''); 
    setPassword('');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email || !password || !username) {
        throw new Error('All fields are required for signup');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        username: username,
        role: role,
      });

      console.log('User signed up successfully');

      if (role === 'admin') {
        window.location.href = '/adminDashboard';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email || !password) {
        throw new Error('All fields are required for login');
      }

      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');

      window.location.href = '/dashboard'; 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className='p-4'>
        <h1 className='text-5xl font-bold align-items text-center'>Team Management System</h1>
    </div>
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 text-center ${isLogin ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={toggleForm}
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
          <button
            className={`w-1/2 py-2 text-center ${!isLogin ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={toggleForm}
          >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {isLogin ? (
          <div>
            <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button className="w-full py-2 bg-blue-500 text-white rounded-md" type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-center mb-4">Signup</h2>
            <form className="space-y-4" onSubmit={handleSignUp}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button className="w-full py-2 bg-blue-500 text-white rounded-md" type="submit" disabled={loading}>
                {loading ? 'Signing up...' : 'Signup'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
