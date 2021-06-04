import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<App />);

  userEvent.click(screen.getByText(/cart/i));
  userEvent.click(screen.getByText(/checkout/i));

  expect(screen.getByText(/react plants/i));
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  // Navigating to checkout form
  //   userEvent.click(screen.getByText(/cart/i));
  //   const checkoutButton = screen.getByText(/checkout/i);
  //   userEvent.click(checkoutButton);
  // Filling out checkout form
  const firstNameText = screen.getByLabelText("First Name:");
  userEvent.type(firstNameText, "Lance");

  const lastNameText = screen.getByLabelText("Last Name:");
  userEvent.type(lastNameText, "DragonTrainer");

  const AddressText = screen.getByLabelText("Address:");
  userEvent.type(AddressText, "123 FinalFour");

  const cityText = screen.getByLabelText("City:");
  userEvent.type(cityText, "FinalFour city");

  const stateText = screen.getByLabelText("State:");
  userEvent.type(stateText, "FinalFour state");

  const zipText = screen.getByLabelText("Zip:");
  userEvent.type(zipText, "38122");
  //Submitting Checkout Form
  const button = screen.getByRole("button");
  userEvent.click(button);
  //Checking to see if success message appears
  expect(screen.getByTestId("successMessage"));
});
