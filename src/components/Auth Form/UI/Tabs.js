import React from "react";

const Tabs = ({ toggleAuth }) => {
    const handleTab = (e) => {
        if (e.target.classList.contains("active")) return;
        document
            .querySelectorAll(".tabs button")
            .forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
        toggleAuth();
    };

    return (
        <div className="tabs">
            <button className="active" onClick={handleTab}>
                LOG IN
            </button>
            <button onClick={handleTab}>SIGN UP</button>
        </div>
    );
};

export default Tabs;
