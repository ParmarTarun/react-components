import "./App.css";
import Components from "./components/Components";
import Main from "./components/Auth Form/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Components />} exact />
                    <Route path="/auth-form" element={<Main />} exact />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
