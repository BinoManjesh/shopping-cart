import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Root from "../../src/routes/root";
import { act } from "react-dom/test-utils";

let outletContext;

vi.mock("react-router-dom", () => {
  const Empty = () => <></>;
  return {
    Link: Empty,
    // eslint-disable-next-line react/prop-types
    Outlet: ({ context }) => {
      outletContext = context;
      return <></>;
    },
    useNavigation: () => ({ state: "idle" }),
  };
});

describe("Root component", () => {
  it("works for empty cart", () => {
    render(<Root />);

    expect(screen.getByTestId("cart-size").textContent).toBe("0");
  });

  it("works for cart with 1 item", () => {
    render(<Root />);
    const { addToCart } = outletContext;

    act(() => {
      addToCart(3, 1);
    });

    expect(screen.getByTestId("cart-size").textContent).toBe("1");
  });

  it("works for cart with multiple items", () => {
    render(<Root />);
    const { addToCart } = outletContext;

    act(() => {
      addToCart(3, 1);
      addToCart(3, 1);
      addToCart(3, 1);
      addToCart(4, 1);
      addToCart(4, -1);
      addToCart(4, 1);
      addToCart(5, 1);
      addToCart(5, 1);
      addToCart(5, 1);
      addToCart(5, 1);
    });

    expect(screen.getByTestId("cart-size").textContent).toBe("8");
  });

  it("prevents negative counts", () => {
    render(<Root />);
    const { addToCart } = outletContext;

    act(() => {
      addToCart(3, 1);
      addToCart(3, -1);
      addToCart(3, -1);
      addToCart(3, -1);

      addToCart(4, 1);
      addToCart(4, 1);
    });

    expect(screen.getByTestId("cart-size").textContent).toBe("2");
  });
});
