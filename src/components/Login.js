import React from "react";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="login-pg-container">
      <section className="left">InstaTrack</section>
      <section className="right">
        <div className="login-container">
          <h1>Welcome back!</h1>
          <form onSubmit={handleSubmit}>
            <label className="input-label" for="email">
              Email
            </label>
            <input
              type="text"
              placeholder="john@example.com"
              id="email"
              name="email"
              className="input-box"
              required
            />
            <label className="input-label" for="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              className="input-box"
              required
            />
            <button className="login-btn">Login</button>
            <div>
              New here? <span>Create a Free Account</span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
