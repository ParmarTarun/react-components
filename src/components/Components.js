import React from "react";

const Components = () => {
    const components = [
        {
            name: "Auth Form",
            link: "/auth-form",
        },
    ];

    return (
        <div className="components-wrapper">
            {components.map((cmp) => {
                return (
                    <div className="component-card">
                        <h2>{cmp["name"]}</h2>
                        <a href={cmp["link"]}>Check out</a>
                    </div>
                );
            })}
        </div>
    );
};

export default Components;
