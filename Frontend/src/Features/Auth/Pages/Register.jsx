import React from 'react'
import {useNavigate, Link} from 'react-router'
import '../auth.form.scss'

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
     <main >
     <div className = "form-container">
        <h1 className="form-title">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"  placeholder="Enter your username" required/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required/>
          </div>
          <button className ="button primary-button">Register</button>
        </form>

         <p className="account-text">Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </main>
  )
}

export default Register
