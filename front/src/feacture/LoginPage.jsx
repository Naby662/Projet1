import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useLoginMutation } from "../api/auth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const schema = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().min(3, 'il faut au m oins 3 caracteres').required(),
});



export default function LoginPage() {
    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    });
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
        <h1 className="text-3xl font-bold text-center mb-4">Se connecter</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-4 w-full max-w-lg">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-lg w-full" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              className="border border-gray-400 rounded-lg p-2"
            />
            {
                errors.email && <p className="text-red-500">{errors.email.message}</p>
            }
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="password">Mot de passe</label>
            <input
                {...register("password")}
              type="password"
              name="password"
              id="password"
              className="border border-gray-400 rounded-lg p-2"
            />
            {
                errors.password && <p className="text-red-500">{errors.password.message}</p>
            }
          </div>
          <div className="flex-col">

          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'bg-blue-200 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Chargement...' : 'Se connecter'}
          </button>
          <Link to="/register" 
            type="submit"
            className='bg-blue-500  hover:bg-blue-700 ml-60 text-white font-bold py-2 px-4 rounded '
          >
           S'inscrire
          </Link>
            
          </div>
        </form>
      </div>
      <div>
        <img src="/src/assets/images/login.jpg" alt="" />
      </div>

  </div>

  );
}
