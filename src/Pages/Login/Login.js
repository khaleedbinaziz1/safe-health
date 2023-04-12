import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../assets/images/bg.png'
import { AuthContext } from '../../contexts/AuthProvider';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const token = useToken(loginUserEmail);
  const navigate = useNavigate();


  const from = location.state?.from?.pathName || '/';
  
  if(token){
    navigate(from, { replace: true });

  }

  const handleLogin = data => {
    console.log(data);
    setLoginError('');

    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email); 
        toast.success('login successful')

      })
      .catch(error => {
        console.log(error.message)
        setLoginError(error.message);
      });
  }
  return (
    <div className="flex justify-center items-center bg-cover bg-center h-screen p-4 md:p-0" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 mx-auto mt-10" >
        <div className="bg-white shadow-2xl rounded p-7">
          <h2 className="text-xl text-center text-primary mb-4">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">Email</label>
              <input {...register("email", { required: "Email Address is required" })} type="email" id="email" className="input input-bordered w-full" />
              {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="password">Password</label>
              <input {...register("password", { required: "Password is required", minLength: { value: 8, message: 'Password must be 8 characters or longer' }, })} type="password" id="password" className="input input-bordered w-full" />
              {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>

            <div className="mb-4 text-center">
              <label className="label">
                <span className="label-text">Forgot Password?</span>
              </label>
            </div>

            <div className="mb-4">
              <input className='btn btn-primary w-full' type="submit" value="Login" />
              {loginError && <p className='text-red-600'>{loginError}</p>}
            </div>
          </form>

          <p className="text-center">New to doctors portal <Link className='text-primary' to='/signup'> Sign Up</Link></p>
        </div>
      </div>

    </div>


  )
}

export default Login