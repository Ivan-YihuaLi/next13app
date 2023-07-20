'use client';

import { FormEvent, useState } from 'react';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name: string, value: string) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleLogin = (event: FormEvent) => {};

  return (
    <>
      <form
        className={'flex flex-col items-center text-black'}
        onSubmit={handleLogin}
      >
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Passowrd"
          value={form.password}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <div>
          <button className={'bg-white text-black border-black'}>Log in</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
