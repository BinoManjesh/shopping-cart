import { render } from "@testing-library/react";
import Product from "../../src/components/Product";

describe("Product component", () => {
  it("matches snapshot", () => {
    const product = {
      title: "title",
      price: 20.5,
      image: ".",
      rating: {
        rate: 4.9,
        count: 23423,
      },
    };

    const { container } = render(<Product product={product} />);
    expect(container).toMatchSnapshot();
  });
});
