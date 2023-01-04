import { Link } from "react-router-dom";
const Components = () => {
    const components = [
        {
            name: "Auth Form",
            link: "/auth-form",
        },
    ];

    return (
        <>
            <div className="app-header">
                <h1>React Components</h1>
            </div>
            <div className="components-wrapper">
                {components.map((cmp, i) => {
                    return (
                        <div className="component-card" key={i}>
                            <h2>{cmp["name"]}</h2>
                            <Link to={cmp["link"]} target="_blank">
                                Check out
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Components;
