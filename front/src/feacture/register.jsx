import React, { useState } from 'react';
import {useForm} from "react-hook-form"
import {useNavigate } from "react-router-dom";
import { useLoginMutation } from '../api/auth';
import { useEffect } from "react";




export default function RegisterForm() {
// const {register, handleSubmit, formState:{ errors}, reset} = useForm();
// const onSubmit = async (data) =>{
//   console.log("Vous etes inscrit", data);
   
//       reset();
const { register, handleSubmit, formState: {errors}, reset} = useForm();
const navigate = useNavigate();
const [login, {data, isLoading, isSuccess, isError, error}] = useLoginMutation();
useEffect(() => {
  if(isSuccess) {
      localStorage.setItem('user', JSON.stringify(data))
          navigate('/admin');
  }
}, [isSuccess, data, navigate]);

const onSubmit = async (data) => {
  login(data);
  reset();
};


  return (
    <div className="min-h-screen flex justify-center items-center w-full bg-slate-100 mt-10">
      <div className="max-w-lg  space-y-2 bg-white px-10 py-8 rounded-xl shadow">
      <h1 className="text-center text-2xl font-bold">Création d'un compte</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-gray-700 text-lg font-bold mb-2">
            First Name:
          </label>
          <input type="text" id="firstname" name="firstname"
             {...register("firstname")} 
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none
            border-gray-600 mb-4 p-2 outline-orange-500"
            placeholder="Your first name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-gray-700 text-lg font-bold mb-2">
            Last name:
          </label>
          <input type="text" id="lastname" name="lastname"
           {...register("lastname")} 
            // onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none
            border-gray-600 mb-4 p-2 outline-orange-500"
            placeholder="Your last name..."
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">
            E-mail :
          </label>
          <input type="email" id="email" name="email"
          {...register("email")} 
            // onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none
            border-gray-600 mb-4 p-2 outline-orange-500"
            placeholder="barry.doe@example.com"
            required
          />
          {   
            errors.email && <p className='text-red-500'> {errors.email.message} </p>
          }
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">
            Password :
          </label>
          <input type="password" id="password" name="password"
            {...register("password")} 
            
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none 
             border-gray-600 mb-4 p-2 outline-orange-500"
            placeholder="********"
            required
          />
          {
            errors.password && <p className='text-red-500'> {errors.password.message} </p>
          }
        </div>
        
        <div className="text-center">
          <button
            type="submit" 
            className="w-full bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none "
          >
            S'inscrire
          </button>
        </div>
        <div className="text-center">
          <p className="form-info text-md">Vous avez déjà un compte ? Si oui,
          <a href="/LoginPage" className=" hover:text-blue-400 font-bold">
            cliquez ici
            </a>
             pour vous
            connecter.</p>
        </div>

      </form>
      </div>
    </div>
  );
}

