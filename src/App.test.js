import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders fairhurst.dev link", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/fairhurst.dev/i);
  expect(linkElement).toBeInTheDocument();
});
