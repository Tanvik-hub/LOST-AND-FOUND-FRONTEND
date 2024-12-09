import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from "../components/Particle.jsx";
import './log.css';
import Swal from 'sweetalert2';
const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://lost-backend-hvej.onrender.com/login', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    // alert('Login successful!');
                    Swal.fire({
                        title: 'Success',
                        text: 'Login successfully! Start Posting Items!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    setIsAuthenticated(true);
                    localStorage.setItem("isAuthenticated", "true");
                    navigate('/home');
                } else {
                    alert('Incorrect password! Please try again.');
                    setIsAuthenticated(false);
                    localStorage.setItem("isAuthenticated", "false");

                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="particle-container">
                <ParticlesBackground />
            </div>

            <div>
                <h1>Lost and Found</h1>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-grow-1 px-3">
                <div
                    className="p-4 w-100 backk"
                    style={{ maxWidth: '700px', border: '2px solid yellow', borderRadius: '10px' }}

                >
                    <h2 className="mb-3 text-primary text-center">LOGIN</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail1"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>

                    <p className="mt-3 text-center" style={{color:"yellow"}}>Don't have an account?</p>
                    <Link to="/register" className="btn btn-secondary w-100">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
