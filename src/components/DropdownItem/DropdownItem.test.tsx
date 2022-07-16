import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DropdownItem from './DropdownItem';

const mockFn = jest.fn(() => {return;});

describe('Dropdown item component', () => {

  beforeEach(() => {
    render(
      <DropdownItem text='TEST TEXT' handleClick={mockFn}>
        <img alt='TEST CHILD'/>
      </DropdownItem>
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