import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";


test("snapshort with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot(); //snapshot renders the component and check if the changes happen in render through snapshot
});
