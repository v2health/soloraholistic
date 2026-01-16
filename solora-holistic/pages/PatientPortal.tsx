import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientPortal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('This is a demo patient portal login. In a real application, this would authenticate securely.');
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                <span className="material-symbols-outlined text-4xl text-primary">lock_person</span>
            </div>
          <h1 className="text-3xl font-black text-text-main dark:text-white tracking-tight">
            Patient Portal
          </h1>
          <p className="mt-2 text-sm text-text-secondary dark:text-gray-400">
            Securely access your test results, nutritional plans, and documents.
          </p>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark py-8 px-4 shadow-xl rounded-2xl border border-border-light dark:border-border-dark sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-main dark:text-white">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-main dark:text-white">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary dark:text-gray-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary-dark">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-surface-light dark:bg-surface-dark text-gray-500">
                  New to Solora?
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <Link
                to="/contact"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
        
        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4 text-center text-xs text-text-secondary dark:text-gray-400 pt-4">
             <div className="flex flex-col items-center gap-2">
                 <span className="material-symbols-outlined text-2xl">description</span>
                 <span>Lab Results</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                 <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
                 <span>Meal Plans</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                 <span className="material-symbols-outlined text-2xl">secure_update</span>
                 <span>Secure Messaging</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;