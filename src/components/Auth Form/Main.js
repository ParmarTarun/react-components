import React, { useState } from "react";
import "./UI/authform.css";
import LoginForm from "./UI/LoginForm";
import SignUpForm from "./UI/SignUpForm";
import Tabs from "./UI/Tabs";

const Main = () => {
    const [loggingIn, setLogginIn] = useState(true);

    return (
        <div className="container">
            <div className="form-wrapper">
                <Tabs toggleAuth={() => setLogginIn((ps) => !ps)} />
                {loggingIn ? <LoginForm /> : <SignUpForm />}
            </div>
        </div>
    );
};

export default Main;
