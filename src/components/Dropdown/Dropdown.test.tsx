import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DELETE, EDIT, MODIFY_POST } from '../../constants';

import Dropdown from './Dropdown';

const mockFn1 = jest.fn(() => {return;});
const mockFn2 = jest.fn(() => {return;});

describe('Dropdown component', () => {

  beforeEach(() => {
    render(
      <Dropdown
        iconClassName='test'
        handleDeletePostClick={mockFn1}
        handleEditPostClick={mockFn2}
      />
    );
  });

  it('Should render button correctly', () => {
    const dropdownButton = screen.getByLabelText(MODIFY_POST);
    expect(dropdownButton).toBeInTheDocument();
  });

  it('Should display list of items when icon is clicked', async () => {
    const dropdownButton = screen.getByLabelText(MODIFY_POST);
    userEvent.click(dropdownButton);

    const deleteItem = await screen.findByText(DELETE);
    const editItem = await screen.findByText(EDIT);
    expect(deleteItem).toBeInTheDocument();
    expect(editItem).toBeInTheDocument();
  });

  it('Should call functions when clicking on displayed items', async () => {
    const dropdownButton = screen.getByLabelText(MODIFY_POST);
    userEvent.click(dropdownButton);

    const deleteItem = await screen.findByText(DELETE);
    const editItem = await screen.findByText(EDIT);

    userEvent.click(deleteItem);
    userEvent.click(editItem);
    await waitFor(() => expect(mockFn1).toHaveBeenCalled());
    await waitFor(() => expect(mockFn2).toHaveBeenCalled());
  });
});
