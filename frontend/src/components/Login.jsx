import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/character-sheet"); // Redirect after login
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="box" style={{ maxWidth: "400px", margin: "auto" }}>
          <h1 className="title has-text-centered">Login</h1>
          {error && <p className="notification is-danger">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <button className="button is-primary is-fullwidth">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
