import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders create New Upvote List button", () => {
  render(<App />);
  const linkElement = screen.getByText(/create New Upvote List/i);
  expect(linkElement).toBeInTheDocument();
});
