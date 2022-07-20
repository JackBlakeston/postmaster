import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MODIFY_POST } from '../../constants';
import { store } from '../../redux/store';
import { IPost } from '../../types';
import PostCard from './PostCard';

const mockPost: IPost = { id: 1, title: 'Test title', body: 'Test body', userId: 1 };

const mockFn1 = jest.fn(() => {return;});
const mockFn2 = jest.fn(() => {return;});

describe('Post card component', () => {

  it('Should render content correctly', () => {
    render(
      <Provider store={store}>
        <PostCard post={mockPost} handleEditClick={mockFn1} handleCardClick={mockFn2}/>
      </Provider>
    );

    const title = screen.getByText('Test title');
    const body = screen.getByText('Test body');
    const postedBy = screen.getByText('Posted by User 1');
    const dropdownButton = screen.getByLabelText(MODIFY_POST);

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(postedBy).toBeInTheDocument();
    expect(dropdownButton).toBeInTheDocument();
  });
});