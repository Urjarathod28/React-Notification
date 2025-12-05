import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import LoadingButton from '../components/LoadingButton';
import {Link} from "react-router-dom"


const LoginPage = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        toast.info("Logging in...");

        const res = await axios.post("http://localhost:4000/api/auth/login", data);

        toast.success(res.data.message);

        localStorage.setItem("token", res.data.token);
        } catch (err) {
            toast.error(err.response?.data?.message || "Login failed!");
        } finally {
            setLoading(false);
        }
    };
  return (
    <div className='auth-container'>
        <div className="auth-card" style={{ width: "300px", margin: "50px auto" }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />

            <LoadingButton loading={loading} text="Login"/>

            </form>

            <p style={{ marginTop: "10px" }}>
                Don’t have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    </div>
  )
}

export default LoginPage;
