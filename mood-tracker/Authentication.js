import { useState } from "react";
import { handleSignUp } from "../firebase/auth"; // This would be your signup logic

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
        Sign Up
      </button>
    </form>
  );
}
