import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import UserForm from "../pages/UserForm";
import { api } from "../services/api";

vi.mock("../services/api", () => ({
  api: {
    post: vi.fn(),
  },
}));

vi.mock("../components/Navbar", () => ({
  default: () => <div data-testid="navbar">Mock Navbar</div>,
}));

describe("UserForm Page", () => {
  test("renders user form correctly", () => {
    render(
      <MemoryRouter>
        <UserForm />
      </MemoryRouter>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText("Cadastro de Usuário")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
  });

  test("shows success message on successful submission", async () => {
    (api.post as vi.Mock).mockResolvedValue({});

    render(
      <MemoryRouter>
        <UserForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Nome"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.click(screen.getByText("Cadastrar"));

    await waitFor(() => {
      expect(
        screen.getByText("Usuário cadastrado com sucesso!")
      ).toBeInTheDocument();
    });
  });

  test("handles API error gracefully", async () => {
    (api.post as vi.Mock).mockRejectedValue(
      new Error("Erro ao cadastrar usuário")
    );

    render(
      <MemoryRouter>
        <UserForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Nome"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.click(screen.getByText("Cadastrar"));

    await waitFor(() => {
      expect(
        screen.queryByText("Usuário cadastrado com sucesso!")
      ).not.toBeInTheDocument();
    });
  });
});
