import "@testing-library/jest-dom";

import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Login from "../pages/Login";
import { MemoryRouter } from "react-router-dom";

describe("Login Page", () => {
  test("renders login form correctly", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  test("shows error message for incorrect login", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: "wrong@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Senha"), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByText("Entrar"));

    expect(screen.getByText("Usuário não encontrado!")).toBeInTheDocument();
  });
});
