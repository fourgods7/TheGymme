import React from 'react';

const AuthDemo = ({ mode, onBack, onSwitch }) => {
  const isSignup = mode === 'signup';

  return (
    <main className="min-h-screen bg-page flex items-center justify-center px-5 py-16">
      <section className="w-full max-w-md bg-white p-8 md:p-10 shadow-xl">
        <button type="button" onClick={onBack} className="text-sm font-bold uppercase tracking-wider text-neutral-500 hover:text-primary-200">
          ← Back to TheGymme
        </button>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-primary-200">THEGYMME FITNESS</p>
        <h1 className="h2 mt-3 mb-3">{isSignup ? 'Create account' : 'Welcome back'}<span className="text-primary-200">.</span></h1>
        <p className="text-sm text-neutral-400 mb-8">
          {isSignup ? 'This is a demo registration page. Account creation is not connected yet.' : 'This is a demo login page. Authentication is not connected yet.'}
        </p>
        <form onSubmit={(event) => event.preventDefault()} className="space-y-5">
          {isSignup && (
            <label className="block text-sm font-semibold text-neutral-500">
              Full name
              <input required type="text" autoComplete="name" placeholder="Your full name" className="mt-2 w-full border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-primary-200" />
            </label>
          )}
          <label className="block text-sm font-semibold text-neutral-500">
            Email address
            <input required type="email" autoComplete="email" placeholder="you@example.com" className="mt-2 w-full border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-primary-200" />
          </label>
          <label className="block text-sm font-semibold text-neutral-500">
            Password
            <input required type="password" autoComplete={isSignup ? 'new-password' : 'current-password'} placeholder="Enter a demo password" className="mt-2 w-full border border-neutral-300 px-4 py-3 font-normal outline-none focus:border-primary-200" />
          </label>
          <button type="submit" className="btn btn-lg btn-primary w-full">{isSignup ? 'Create demo account' : 'Log in to demo'}</button>
          <p className="text-xs text-neutral-400">Demo only — this form does not send or store your information.</p>
        </form>
        <p className="mt-6 text-sm text-neutral-500">
          {isSignup ? 'Already have an account?' : 'New to TheGymme?'}{' '}
          <button type="button" onClick={() => onSwitch(isSignup ? 'login' : 'signup')} className="font-bold text-primary-200 underline">
            {isSignup ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </section>
    </main>
  );
};

export default AuthDemo;
