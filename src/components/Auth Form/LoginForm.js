import React from "react";
const userIcon = require("./user.png");

const LoginForm = () => {
    return (
        <div className="login-form">
            <div className="user-icon">
                <img src={userIcon} alt="User Icon" />
            </div>
            <div className="input-group">
                <input type="text" placeholder="NAME" />
            </div>
            <div className="input-group">
                <input type="password" placeholder="PASSWORD" />
            </div>
            <button className="login-btn">LOGIN</button>
            <div className="form-footer">
                <button>Forgot Password?</button>
            </div>
        </div>
    );
};

export default LoginForm;
