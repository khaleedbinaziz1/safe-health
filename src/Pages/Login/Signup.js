import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import bg from '../../assets/images/bg.png'
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register,handleSubmit,formState: {errors}} = useForm();
    const {createUser,updateUser}=useContext (AuthContext);
    const [signUpError,setSignUpError] =useState('');
  const [createdUserEmail,setCreatedUserEmail] = useState('');
    const [token] =useToken(createdUserEmail);
    const navigate = useNavigate();
    
    //  if(token){
    //   navigate('/')
    //  }

    const handleSignUp = (data)=>{
        console.log(data);
        setSignUpError('');
        createUser(data.email,data.password)
        .then(result=>{
           const user =result.user;
           console.log(user);
           toast.success('user created successfully.');
           const userInfo ={
            displayName: data.name
           }
           updateUser(userInfo)
           .then(()=>{
            saveUser(data.name,data.email);
           })
           .catch(err => console.log(err));
        })
        .catch(error => {  
          console.log(error)
          setSignUpError(error.message)
        })
    }
    const saveUser = (name, email) =>{
      const user ={name, email};
      fetch('http://localhost:500/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
        setCreatedUserEmail(email);
 
      })
  } 


  return (
    <div className="flex justify-center items-center bg-cover bg-center h-screen p-4 md:p-0" style={{ backgroundImage: `url(${bg})` }}>
  <div className="w-full md:w-1/3 bg-white rounded-lg shadow-xl p-6">
    <h2 className="text-2xl font-bold text-primary mb-4 text-center">Sign In</h2>
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="input input-bordered w-full"
        />
        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
          className="input input-bordered w-full"
        />
        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Password must be 8 characters or longer" },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
              message: "Password must be strong",
            },
          })}
          className="input input-bordered w-full"
        />
        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
      </div>

      <button className="btn btn-primary w-full" type="submit">
        Sign Up
      </button>
      {signUpError && <p className="text-red-600">{signUpError}</p>}
    </form>
    <p className="mt-4 text-center">
      Already have an account?{" "}
      <Link className="text-primary" to="/login">
        Login
      </Link>
    </p>
  </div>
</div>

  )
}

export default Signup