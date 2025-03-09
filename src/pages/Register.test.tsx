import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Register from "../pages/Register";
import { api } from "../services/api";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Register Page", () => {
  test("renders register form correctly", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(screen.getByText("Cadastro")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
  });

  test("shows error when trying to register with empty fields", async () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Cadastrar"));
    await waitFor(() => {
      expect(
        screen.getByText("Erro inesperado. Tente novamente.")
      ).toBeInTheDocument();
    });
  });

  test("successful registration redirects to login page", async () => {
    const mockNavigate = vi.fn();
    vi.spyOn(require("react-router-dom"), "useNavigate").mockReturnValue(
      mockNavigate
    );

    (api.post as vi.Mock).mockResolvedValue({ data: { token: "12345" } });

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Senha"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Cadastrar"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
  });

  test("displays error message on API failure", async () => {
    (api.post as vi.Mock).mockRejectedValue(new Error("Erro ao cadastrar"));

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Senha"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Cadastrar"));

    await waitFor(() => {
      expect(screen.getByText("Erro ao cadastrar")).toBeInTheDocument();
    });
  });
});
