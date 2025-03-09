import Navbar from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  width: 100vw;
`;

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <h2>Bem-vindo ao Dashboard</h2>
        <p>Gerencie seus dados e cadastros com facilidade.</p>
      </Container>
    </>
  );
}
