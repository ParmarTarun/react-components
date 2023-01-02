import React, { useState } from "react";
import "./authform.css";
import LoginForm from "./LoginForm";

const Main = () => {
    const loggingIn = useState(true);

    return (
        <div className="container">
            <div className="form-wrapper">
                {loggingIn ? <LoginForm /> : <></>}
            </div>
        </div>
    );
};

export default Main;
