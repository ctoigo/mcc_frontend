import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";
import { JSX } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserForm from "./pages/UserForm";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem("auth");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-form"
            element={
              <PrivateRoute>
                <UserForm />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
