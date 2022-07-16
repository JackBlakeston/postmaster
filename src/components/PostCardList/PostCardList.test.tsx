import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';

import { store } from '../../redux/store';
import { IPost } from '../../types';
import PostCardList from './PostCardList';

const mockPosts: IPost[] = [{ id: 1, title: 'Test title', body: 'Test body', userId: 1 }];
const mock = new MockAdapter(axios);
mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, mockPosts);

describe('Post card list component', () => {

  it('Should render post cards correctly', async () => {
    render(
      <Provider store={store}>
        <PostCardList/>
      </Provider>
    );

    await waitFor(() => {
      const postTitle = screen.getByText('Test title');
      expect (postTitle).toBeInTheDocument();
    });
  });
});