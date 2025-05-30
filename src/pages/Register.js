import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`https://epiano-backend-a3ckfadbhjccg3av.westeurope-01.azurewebsites.net/api/register`, { username, password })
      .then(res => {
        setMessage(res.data.message);
        localStorage.setItem('user', username);
        window.location.href = '/';
      })
      .catch(err => setMessage(err.response?.data?.error || "Error registering"));
  };

  return (
    <div className="card p-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username:</label>
          <input className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Register</button>
      </form>
      {message && <div className="alert alert-info mt-2">{message}</div>}
    </div>
  );
}
export default Register;