import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { store } from '../../redux/store';
import { FetchStatus } from '../../types';
import { fetchPosts, postAdded, postDeleted, postEdited } from './postsSlice';

const mockPost = { id: 1, title: 'Test Post!', body: 'Testing', userId: 1 };
const mockPost2 = { id: 1, title: 'Another test Post!', body: 'Testing some more', userId: 1 };

const mock = new MockAdapter(axios);

mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, mockPost);

describe('Posts slice', () => {

  it('Should initially set posts to an empty array', () => {
    const posts = store.getState().posts.posts;
    expect(posts).toEqual([]);
  });

  it('Should fetch posts from API and add them to state', async () => {
    const statusBefore = store.getState().posts.status;
    expect(statusBefore).toEqual(FetchStatus.IDLE);

    await store.dispatch(fetchPosts());

    const posts = store.getState().posts.posts;
    expect(posts).toEqual([mockPost]);

    const statusAfter = store.getState().posts.status;
    expect(statusAfter).toEqual(FetchStatus.SUCCEEDED);
  });

  it('Should delete posts from state', () => {
    store.dispatch(postDeleted(1));
    const posts = store.getState().posts.posts;
    expect(posts).toEqual([]);
  });

  it('Should add posts to state', () => {
    store.dispatch(postAdded({ title: 'Test Post!', body: 'Testing' }));
    const posts = store.getState().posts.posts;
    expect(posts).toEqual([mockPost]);
  });

  it('Should edit posts in state', () => {
    store.dispatch(postEdited({ id: 1, title: 'Another test Post!', body: 'Testing some more' }));
    const posts = store.getState().posts.posts;
    expect(posts).toEqual([mockPost2]);
  });
});