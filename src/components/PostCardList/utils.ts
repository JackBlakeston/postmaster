import { IFilters, IPost, SortOrder, SortType } from '../../types';
import { findUserById } from '../../utils/utils';

const filterPosts = (posts: IPost[], filters: IFilters) => {
  return posts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(filters.search.toLowerCase());
    let userMatch = true;
    if (filters.users.length > 0) {
      userMatch = filters.users.includes(post.userId);
    }
    return titleMatch && userMatch;
  });
};

const sortPosts = (posts: IPost[], filters: IFilters) => {
  posts.sort((a, b) => {
    if (filters.sortType === SortType.TITLE) {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    } else {
      const userA = findUserById(a.userId)?.username as string;
      const userB = findUserById(b.userId)?.username as string;
      return userA.toLowerCase() > userB.toLowerCase() ? 1 : -1;
    }
  });
  if (filters.sortOrder === SortOrder.DESCENDING) {
    posts.reverse();
  }
  return posts;
};

export const filterAndSortPosts = (posts: IPost[], filters: IFilters) => {
  const filteredPosts = filterPosts(posts, filters);
  const sortedPosts = sortPosts(filteredPosts, filters);
  console.log(sortedPosts);
  return sortedPosts;
};