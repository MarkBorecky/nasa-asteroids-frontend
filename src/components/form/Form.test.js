import { render, screen } from '@testing-library/react';
import Form from './Form';

test('expect start input is fulfilled', () => {
  render(<Form />);
  const result = render(<Form />);
  const startDate = result.container.querySelector('#start');
  expect(startDate).toBeInTheDocument();
});

test('expect end input is fulfilled', () => {
    render(<Form />);
    const result = render(<Form />);
    const endDate = result.container.querySelector('#end');
    expect(endDate).toBeInTheDocument();
    const date = new Date().toISOString().split('T')[0]
    expect(endDate.value).toEqual(date);
  });
