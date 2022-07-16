import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { CREATE_POST, DISCARD, EDIT_POST, POST_BODY, POST_TITLE } from '../../constants';
import { store } from '../../redux/store';

import PostForm from './PostForm';

const mockFn = jest.fn(() => {return;});

describe('Post form component', () => {

  it('Should render elements correctly', () => {
    render(
      <Provider store={store}>
        <PostForm
          setIsModalVisible={mockFn}
        />
      </Provider>
    );
    const titleInput = screen.getByPlaceholderText(POST_TITLE);
    const bodyInput = screen.getByPlaceholderText(POST_BODY);
    const discardButton = screen.getByText(DISCARD);
    const createPostButton = screen.getByText(CREATE_POST);

    expect(titleInput).toBeInTheDocument();
    expect(bodyInput).toBeInTheDocument();
    expect(discardButton).toBeInTheDocument();
    expect(createPostButton).toBeInTheDocument();
  });

  it('Should call setIsModalVisible function if Discard button is clicked', async () => {
    render(
      <Provider store={store}>
        <PostForm
          setIsModalVisible={mockFn}
        />
      </Provider>
    );
    const discardButton = screen.getByText(DISCARD);
    userEvent.click(discardButton);
    await waitFor(() => expect(mockFn).toHaveBeenCalled());
  });

  it('Should display a different message on submit button when editing a post', () => {
    render(
      <Provider store={store}>
        <PostForm
          setIsModalVisible={mockFn}
          isEditingPost
        />
      </Provider>
    );
    const editPostButton = screen.getByText(EDIT_POST);
    expect(editPostButton).toBeInTheDocument();
  });

  it('Submit button should add new posts to the redux store and close modal', async () => {
    render(
      <Provider store={store}>
        <PostForm
          setIsModalVisible={mockFn}
        />
      </Provider>
    );
    const titleInput = screen.getByPlaceholderText(POST_TITLE);
    const bodyInput = screen.getByPlaceholderText(POST_BODY);
    await userEvent.type(titleInput, 'Test title');
    await userEvent.type(bodyInput, 'Test body');

    const createPostButton = screen.getByText(CREATE_POST);
    userEvent.click(createPostButton);

    await waitFor(async () => {
      expect(mockFn).toHaveBeenCalled();
      const posts = store.getState().posts.posts;
      expect(posts[0].title).toEqual('Test title');
    });
  });

  it('Submit button should only work if there is content in both forms', async () => {
    render(
      <Provider store={store}>
        <PostForm
          setIsModalVisible={mockFn}
        />
      </Provider>
    );
    const createPostButton = screen.getByText(CREATE_POST);
    userEvent.click(createPostButton);
    expect(store.getState().posts.posts.length).toEqual(1);

    const titleInput = screen.getByPlaceholderText(POST_TITLE);
    await userEvent.type(titleInput, 'Test title');
    expect(store.getState().posts.posts.length).toEqual(1);

    const bodyInput = screen.getByPlaceholderText(POST_BODY);
    await userEvent.type(bodyInput, 'Test body');

    userEvent.click(createPostButton);

    await waitFor(async () => {
      const postsAfter = store.getState().posts.posts;
      expect(postsAfter.length).toEqual(2);
    });
  });
});