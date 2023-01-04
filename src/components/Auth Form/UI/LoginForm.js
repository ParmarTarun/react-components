import React from "react";
const userIcon = require("./user.png");

const LoginForm = () => {
    return (
        <div className="form login-form">
            <div className="icon">
                <img src={userIcon} alt="User Icon" />
            </div>
            <div className="input-group">
                <input type="email" placeholder="EMAIL" />
            </div>
            <div className="input-group">
                <input type="password" placeholder="PASSWORD" />
            </div>
            <button className="auth-btn">LOGIN</button>
            <div className="form-footer">
                <button className="fp-btn">Forgot Password?</button>
            </div>
        </div>
    );
};

export default LoginForm;
