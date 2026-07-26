import { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;