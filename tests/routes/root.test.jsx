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
  };
});

describe("Root component", () => {
  it("works for empty cart", () => {
    render(<Root />);

    expect(screen.getByTestId("cart-size").textContent).toBe("0");
  });

  it("works for cart with 1 item", () => {
    render(<Root />);
    const { cart, setCart } = outletContext;

    act(() => {
      const newCart = new Map(cart);
      newCart.set(3, 1);
      setCart(newCart);
    });

    expect(screen.getByTestId("cart-size").textContent).toBe("1");
  });

  it("works for cart with multiple item", () => {
    render(<Root />);
    const { cart, setCart } = outletContext;

    act(() => {
      const newCart = new Map(cart);
      newCart.set(3, 3);
      newCart.set(4, 5);
      newCart.set(2, 7);
      setCart(newCart);
    });

    expect(screen.getByTestId("cart-size").textContent).toBe("" + (3 + 5 + 7));
  });
});
