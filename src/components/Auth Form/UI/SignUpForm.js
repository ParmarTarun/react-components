import React from "react";
const newUserIcon = require("./newuser.png");

const SignUpForm = () => {
    return (
        <div className="form signup-form">
            <div className="icon">
                <img src={newUserIcon} alt="New User Icon" />
            </div>
            <div className="input-group">
                <input type="email" placeholder="abc@gmail.com" />
            </div>
            <div className="input-group">
                <input type="text" placeholder="USERNAME" />
            </div>
            <div className="input-group">
                <input type="password" placeholder="PASSWORD" />
            </div>
            <button className="auth-btn">SIGN UP</button>
        </div>
    );
};

export default SignUpForm;
