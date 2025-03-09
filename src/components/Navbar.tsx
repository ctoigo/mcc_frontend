import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #007bff;
  padding: 20px;
  color: white;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  a,
  button {
    color: white;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
`;

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <Nav>
      <h3>Dashboard</h3>
      <NavLinks>
        <Link to="/dashboard">Home</Link>
        <Link to="/user-form">Cadastro</Link>
        <button onClick={handleLogout}>Logout</button>
      </NavLinks>
    </Nav>
  );
}
