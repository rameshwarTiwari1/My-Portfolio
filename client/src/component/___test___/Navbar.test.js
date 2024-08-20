import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar/navbar";

describe("test the navbar component", () => {
  test("header has text logo", () => {
    render(<Navbar />);
    const logo = screen.getByText("Rameshwar Tiwari");
    expect(logo);
  });

  test("header has some more text", () => {
    render(<Navbar />);
    const headertext = screen.getByText(/About/);
    expect(headertext).toBeTruthy();
    //toBeTruthy also work like tobeInTheDocumnet
  });
});
