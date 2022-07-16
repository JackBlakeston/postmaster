import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { NEW_POST, POST_TITLE } from '../../constants';
import { store } from '../../redux/store';
import NewPostButton from './NewPostButton';

describe('New post button component', () => {

  beforeEach(() => {
    render(
      <Provider store={store}>
        <NewPostButton/>
      </Provider>
    );
  });

  it('Should render correctly', () => {
    const button = screen.getByText(NEW_POST);
    expect(button).toBeInTheDocument();
  });

  it('Should show new post modal upon being clicked', async () => {
    const button = screen.getByText(NEW_POST);
    userEvent.click(button);

    const modalTitleInput = await screen.findByPlaceholderText(POST_TITLE);
    expect(modalTitleInput).toBeInTheDocument();
  });
});