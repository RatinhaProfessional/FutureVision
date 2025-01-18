import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Blob from "./blob";
import { Canvas } from "@react-three/fiber";

export default function LogIn() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://futurevision-backend2.onrender.com/users/login", { email, password })
        .then(result => {
            console.log(result)
            if (result.data && result.data.data && result.data.data.token) {
                alert("Logged in!");
                localStorage.setItem("auth-token", result.data.data.token);
                navigate("/");
            }else{
                navigate("/register")
                alert("You are not registered to this service")

            }
       
        })
        .catch(err => console.log(err))
    }


  return (
    <section className="grid grid-cols-2 grid-rows-1 mx-52 mt-40">
      <div>
      <div className="w-full h-full overflow-visible">
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob />
          </Canvas>
        </div>
      </div>
      <div className="flex-col justify-center align-center">
        <h2 className="text-4xl font-header text-center mb-5">Log In</h2>
        <form onSubmit={handleSubmit} className="justify-items-center">
          <div className="mb-5">
            <label htmlFor="email" className=" mr-5">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className=" mr-5">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="bg-transparent"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="uppercase font-bold">
            Log in
          </button>
        </form>
        <div className="justify-items-center">
          <p className="mt-10">Don't have an account yet?</p>
          <Link to="/register" className="mt-5 uppercase font-bold">
          Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}