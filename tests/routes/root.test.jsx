import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Root from "../../src/routes/root";

vi.mock("react-router-dom", () => {
  const Empty = () => <></>;
  return {
    Link: Empty,
    Outlet: Empty,
  };
});

describe("Root component", () => {
  it("works for empty cart", () => {
    render(<Root />);
    expect(screen.getByTestId("cart-size").textContent).toBe("0");
  });
});
