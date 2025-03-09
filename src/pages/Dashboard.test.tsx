import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Dashboard from "../pages/Dashboard";
import { MemoryRouter } from "react-router-dom";

vi.mock("../components/Navbar", () => ({
  default: () => <div data-testid="navbar">Mock Navbar</div>,
}));

describe("Dashboard Page", () => {
  test("renders the Dashboard correctly", () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText("Bem-vindo ao Dashboard")).toBeInTheDocument();
    expect(
      screen.getByText("Gerencie seus dados e cadastros com facilidade.")
    ).toBeInTheDocument();
  });
});
