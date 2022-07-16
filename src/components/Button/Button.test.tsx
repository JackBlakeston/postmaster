import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

const mockFn = jest.fn(() => {return;});

describe('Button component', () => {

  beforeEach(() => {
    render(
      <Button
        text='TEST TEXT'
        onClick={mockFn}
      >
        <img alt='TEST CHILD'/>
      </Button>
    );
  });

  it('Should render props and children correctly', () => {
    const itemByLabel = screen.getByText('TEST TEXT');
    const itemByChild = screen.getByAltText('TEST CHILD');

    expect(itemByLabel).toBeInTheDocument();
    expect(itemByChild).toBeInTheDocument();
  });

  it('Should call click handler function on click', async () => {
    const item = screen.getByText('TEST TEXT');
    userEvent.click(item);
    await waitFor(() => expect(mockFn).toHaveBeenCalled());
  });
});