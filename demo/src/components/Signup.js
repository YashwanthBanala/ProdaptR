import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap CSS is imported
import './Signup.css';  // For any additional custom styling

function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup form submitted");
    };

    return (
        <div className="container mt-1 mb-1">
            <h1 className="text-center mb-3">Hii Signup</h1>
            <p className="text-center mb-4">Please fill in the details to create an account</p>
            <div className="signup-container mx-auto p-4 border rounded shadow-sm" style={{ maxWidth: '400px', backgroundColor: 'white' }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" placeholder="Username" required className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder="Email" required className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder="Password" required className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
