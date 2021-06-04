import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
render(<App />);

userEvent.click(screen.getByText(/cart/i));
userEvent.click(screen.getByText(/checkout/i));

expect(screen.getByText(/react plants/i));

test("form shows success message on submit with form details", () => {});
