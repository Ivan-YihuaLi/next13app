'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

const RegisterForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
    setForm((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <>
      <form className={'flex flex-col items-center text-black [&>input]:my-2'}>
        <input
          name={'email'}
          type={'email'}
          placeholder={'Email Address'}
          value={form.email}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          value={form.password}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          name={'passwordConfirmation'}
          type={'password'}
          placeholder={'Confirm your password'}
          value={form.passwordConfirmation}
          onChange={(e) => handleOnChange(e)}
        />

        <div className={'py-4'}>
          <button className={'bg-white text-black border-black p-1'}>
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
