import { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setUser(data.user);  
      alert('Log In successful!');
    } catch (err) {
      alert('Log In failed!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Log In</h2>
      <input 
        value={username} 
        onChange={(event) => setUsername(event.target.value)} 
        placeholder="Username" 
        required 
      />
      <input 
        type="password"
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
        placeholder="Password" 
        required 
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
