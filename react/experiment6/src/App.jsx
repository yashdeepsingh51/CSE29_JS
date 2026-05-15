import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  
  useEffect(() => {
    console.log("Component Loaded Successfully");
  }, []);

  
  const validateForm = () => {
    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newUser = {
        id: Date.now(),
        name,
        email,
      };

      
      setUsers([...users, newUser]);

      setSuccess("Registration Successful!");

      
      setName("");
      setEmail("");
      setPassword("");

      setErrors({});
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>REGISTRATION FORM</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <button type="submit">Register</button>
        </form>

        {success && <h2 className="success">{success}</h2>}

        <div className="users-box">
          <h2>Registered Users</h2>

          {users.length === 0 ? (
            <p>No users registered</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;