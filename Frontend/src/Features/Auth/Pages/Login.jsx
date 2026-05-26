import React from 'react'
import '../auth.form.scss'
import { useNavigate } from 'react-router'
import {Link} from 'react-router'

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <main >
     <div className = "form-container">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  placeholder="Enter your email" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required/>
          </div>
          <button className ="button primary-button">Login</button>
        </form>

        <p className="account-text">Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </main>
  )
}

export default Login