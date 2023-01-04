import React from "react";
const newUserIcon = require("./newuser.png");
const googleIcon = require("./google.png");
const linkedinIcon = require("./linkedin.png");
const githubIcon = require("./github.png");

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
            <div className="form-footer">
                <div className="sso-btns">
                    <button>
                        <img src={googleIcon} alt="sso icon" />
                    </button>
                    <button>
                        <img src={linkedinIcon} alt="sso icon" />
                    </button>
                    <button>
                        <img src={githubIcon} alt="sso icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
