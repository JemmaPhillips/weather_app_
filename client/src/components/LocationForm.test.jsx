import React from 'react'; // Add this line
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocationForm from './LocationForm'; // Adjust the import path as necessary


describe('LocationForm', () => {
  test('inputs user location and submits form', () => {
    const handleSubmit = jest.fn();
    render(<LocationForm handleSubmit={handleSubmit} location="" setLocation={() => {}} />);

    userEvent.type(screen.getByRole('textbox'), 'New York');
    fireEvent.submit(screen.getByRole('form'));

    expect(handleSubmit).toHaveBeenCalledWith('New York');
  });
});
