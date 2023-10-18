import React from "react";

function SignUp() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="login-outer">
      <section className="left">InstaTrack</section>
      <section className="right">
        <h2>Welcome back!</h2>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <label className="input-label" for="name">
              Name
            </label>
            <input
              className="input-box"
              type="text"
              placeholder="Enter name"
              id="name"
            />
            <label className="input-label" for="email">
              Email
            </label>
            <input
              className="input-box"
              type="text"
              placeholder="Enter email"
              id="email"
            />
            <label className="input-label" for="password">
              Password
            </label>
            <input
              className="input-box"
              type="password"
              placeholder="Enter password"
              id="password"
            />
            <button className="d-block">Create Account</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
