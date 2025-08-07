import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Login.css';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="container mt-1 mb-1">
            <h1 className="text-center mb-3">Hii Login</h1>
            <p className="text-center mb-4">Please enter your credentials to login</p>

            <div className="login-container mx-auto p-4 border rounded shadow-sm" style={{ maxWidth: '400px', backgroundColor: 'white' }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Login
                    </button>
                    <div className="text-center">
                        <h6>Don't have an account?</h6>
                        <a href="/signup" className="btn btn-link p-0">
                            Signup
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
