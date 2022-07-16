import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';

import App from '../App';
import { CREATE_POST, DELETE, EDIT, EDIT_POST, MODIFY_POST, NEW_POST, POST_BODY, POST_TITLE } from '../constants';
import { store } from '../redux/store';
import { IPost } from '../types';

const mockPosts: IPost[] = [{ id: 1, title: 'Test title', body: 'Test body', userId: 1 }];
const mock = new MockAdapter(axios);
mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, mockPosts);

describe('Post view page', () => {

  beforeEach(async () => {
    render (
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText('Test title')).toBeInTheDocument();
    });
  });

  it('Should render posts correctly', async () => {
    const postCard = await screen.findByText('Test title');
    expect(postCard).toBeInTheDocument();
  });

  it('Should allow user to add new cards', async () => {
    const newPostButton = screen.getByText(NEW_POST);
    userEvent.click(newPostButton);

    const titleInput = await screen.findByPlaceholderText(POST_TITLE);
    const bodyInput = await screen.findByPlaceholderText(POST_BODY);
    expect(titleInput).toBeInTheDocument();
    expect(bodyInput).toBeInTheDocument();

    await userEvent.type(titleInput, 'Test title 2');
    await userEvent.type(bodyInput, 'Test body 2');
    const submitButton = screen.getByText(CREATE_POST);
    userEvent.click(submitButton);

    const newPostCard = await screen.findByText('Test title 2');
    expect(newPostCard).toBeInTheDocument();
  });

  it('Should allow user to delete cards', async () => {
    const postCard2 = await screen.findByText('Test title 2');

    const dropdownButtons = screen.getAllByLabelText(MODIFY_POST);
    userEvent.click(dropdownButtons[0]);

    const deletePost = await screen.findByText(DELETE);
    userEvent.click(deletePost);
    await waitFor(() => expect(postCard2).not.toBeInTheDocument());
  });

  it('Should allow user to modify cards', async () => {
    const dropdownButton = screen.getByLabelText(MODIFY_POST);
    userEvent.click(dropdownButton);

    const editPost = await screen.findByText(EDIT);
    userEvent.click(editPost);

    const titleInput = await screen.findByPlaceholderText(POST_TITLE);
    const bodyInput = await screen.findByPlaceholderText(POST_BODY);
    expect(titleInput).toBeInTheDocument();
    expect(bodyInput).toBeInTheDocument();

    await userEvent.type(titleInput, ' edited');
    const submitButton = screen.getByText(EDIT_POST);
    userEvent.click(submitButton);

    const newPostCard = await screen.findByText('Test title edited');
    expect(newPostCard).toBeInTheDocument();
  });
});