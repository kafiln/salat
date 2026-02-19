import ThemeToggle from "@components/ThemeToggle";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "next-themes";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider attribute="class">{ui}</ThemeProvider>);

describe("ThemeToggle", () => {
  it("should render without crashing", () => {
    const { asFragment } = renderWithTheme(<ThemeToggle />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a default size of 1.5em", () => {
    const { container } = renderWithTheme(<ThemeToggle />);
    const height = container.querySelector("svg")?.getAttribute("height");
    expect(height).toEqual("1.5em");
  });

  it("should have a size from prop", () => {
    const { container } = renderWithTheme(<ThemeToggle size={4} />);
    const height = container.querySelector("svg")?.getAttribute("height");
    expect(height).toEqual("4em");
  });

  it("should change icon on click", () => {
    const { container } = renderWithTheme(<ThemeToggle />);
    const box = container.firstChild;
    expect(box).toBeTruthy();
    const sun = container.querySelector("svg");
    if (box) {
      fireEvent.click(box);
      const moon = container.querySelector("svg");
      expect(sun).not.toEqual(moon);
    }
  });
});
