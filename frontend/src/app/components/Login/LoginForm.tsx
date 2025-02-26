import React, { useState } from 'react';
import Button from '../Elements/Button';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#f5f5f5' 
    }}>
      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        width: '300px' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '1.5rem', 
          color: '#333' 
        }}>
          Login
        </h2>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            color: '#555' 
          }}>
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              borderRadius: '4px', 
              border: '1px solid #ccc', 
              fontSize: '1rem' 
            }}
            placeholder="Enter username"
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            color: '#555' 
          }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              borderRadius: '4px', 
              border: '1px solid #ccc', 
              fontSize: '1rem' 
            }}
            placeholder="Enter password"
            required
          />
        </div>

        <Button
          label="Login"
          onClick={handleSubmit}
          style={{ 
            width: '100%', 
            padding: '0.75rem', 
            backgroundColor: '#4a5568', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            fontSize: '1rem', 
            cursor: 'pointer', 
            transition: 'background-color 0.2s' 
          }}
        />
      </form>
    </div>
  );
};

export default LoginForm; 