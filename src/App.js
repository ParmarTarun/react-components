import "./App.css";
import Components from "./components/Components";
import AuthForm from "./components/Auth Form/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Components />} exact />
          <Route path="/auth-form" element={<AuthForm />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
