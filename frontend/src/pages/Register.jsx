import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import LoadingButton from '../components/LoadingButton';
import {Link} from "react-router-dom"

const Register = () => {
    const [data, setData] = useState({ 
        name: "", 
        email: "", 
        password: "" 
    });
    const [loading, setLoading] = useState(false);

     const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            toast.info("Registering...");

            const res = await axios.post("http://localhost:4000/api/auth/register", data);

            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response?.data?.message || "Registration failed!");
        } finally {
            setLoading(false);
         }
    };
  return (
    <div  className="auth-container">
         <div className="auth-card" style={{ width: "300px", margin: "50px auto" }}>
            <h2>Create Account</h2>
            
            <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />
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

            <LoadingButton loading={loading} text="Register" onClick={handleRegister} />

            </form>

            <p style={{ marginTop: "10px" }}>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    </div>
  )
}

export default Register
