import React, { useState } from "react";
import "./index.css";
import "./components/authform.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Tabs from "./components/Tabs";

const Main = () => {
  const [loggingIn, setLogginIn] = useState(true);

  return (
    <div className="auth-form">
      <div className="form-wrapper">
        <Tabs toggleAuth={() => setLogginIn((ps) => !ps)} />
        {loggingIn ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default Main;
