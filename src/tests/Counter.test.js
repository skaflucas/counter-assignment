import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter/>)
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counter = screen.getByTestId('count')
  expect(counter.textContent).toBe("0")
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'))

  const counter = screen.getByTestId('count')
  expect(counter.textContent).toBe("1")
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'))

  const counter = screen.getByTestId('count')
  expect(counter.textContent).toBe("-1")
});
