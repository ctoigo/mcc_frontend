import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { api } from "../services/api";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  width: 100vw;
`;

const Form = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      await api.post("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
      });
      setSuccess(true);
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Form>
          <h2>Cadastro de Usuário</h2>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit}>Cadastrar</Button>
          {success && (
            <p style={{ color: "green" }}>Usuário cadastrado com sucesso!</p>
          )}
        </Form>
      </Container>
    </>
  );
}
