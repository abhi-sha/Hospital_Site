import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allentry, setallentry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();
    const newentry = { email: email, password: password };
    console.log(newentry);
    setallentry([...allentry, newentry]);
    console.log(allentry);
  };
  return (
    <>
      <form action="#" onClick={submitform}>
        <div className="j">
          <p>LOGIN</p>
          <div className="mail">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
