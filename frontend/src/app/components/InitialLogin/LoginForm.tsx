"use client";
import { useState } from "react";

// Client-side login form component with email/password authentication and persistent session option
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handles form submission and authentication
  const handleSubmit =  (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    console.log('submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center">
        <input
          title="sign in"
          type="checkbox"
          checked={staySignedIn}
          onChange={() => setStaySignedIn(!staySignedIn)}
          className="mr-2"
        />
        <label>Stay signed in</label>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;