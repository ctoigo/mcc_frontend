import Button from "../components/Button";
import Input from "../components/Input";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;
`;

const Form = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("Usuário não encontrado!");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.email === email && user.password === password) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      setError("Credenciais inválidas!");
    }
  };

  return (
    <Container>
      <Form>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Entrar</Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Form>
    </Container>
  );
}
