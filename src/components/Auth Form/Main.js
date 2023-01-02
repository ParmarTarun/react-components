import React, { useState } from "react";
import "./UI/authform.css";
import LoginForm from "./UI/LoginForm";
import SignUpForm from "./UI/SignUpForm";

const Main = () => {
    const [loggingIn, setLogginIn] = useState(false);

    return (
        <div className="container">
            <div className="form-wrapper">
                {loggingIn ? <LoginForm /> : <SignUpForm />}
            </div>
        </div>
    );
};

export default Main;
