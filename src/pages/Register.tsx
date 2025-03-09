import Button from "../components/Button";
import Input from "../components/Input";
import { api } from "../services/api";
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

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");

    console.log("Enviando dados para API:", { email, password });

    try {
      const response = await api.post("register", { email, password });

      console.log("Resposta da API:", response.data);

      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Erro ao cadastrar:", error.message);
        setError(error.message);
      } else {
        setError("Erro inesperado. Tente novamente.");
      }
    }
  };

  return (
    <Container>
      <Form>
        <h2>Cadastro</h2>
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
        <Button onClick={handleRegister}>Cadastrar</Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Form>
    </Container>
  );
}
