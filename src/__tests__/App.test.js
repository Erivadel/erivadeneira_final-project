import { render, screen } from '@testing-library/jest-dom';
import App from '../App';

test('renders learn react link', () => {
  render(< App />);
  const pruebaTest = screen.getByTestId ("pruebaTest");
  expect(pruebaTest).toHaveClass('App');
});
