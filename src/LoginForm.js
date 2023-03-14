import React from 'react';

function LoginForm() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
          <h3 style={{ textAlign: 'center' }}>Log In</h3>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username" style={{ display: 'block' }}>Username</label>
            <input type="text" id="username" name="username" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block' }}>Password</label>
            <input type="password" id="password" name="password" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Log In</button>
        </form>
      </div>
    );
  }

export default LoginForm;

