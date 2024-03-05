import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Upvote from "./Upvote";

describe("Upvote Component", () => {
  test("should toggle selection state on click", () => {
    const mockToggle = jest.fn();
    render(<Upvote selected={false} onToggle={mockToggle} />);

    const upvoteElement = screen.getByTestId("upvote");
    fireEvent.click(upvoteElement);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
