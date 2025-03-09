import styled from "styled-components";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background: #0056b3;
  }
`;

export default function Button({ onClick, children }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
