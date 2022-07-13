import React from 'react';

import './App.css';
import { useFetchPostsQuery } from './features/postsApi/postsApiSlice';

function App() {

  const {data = [], isFetching} = useFetchPostsQuery();
  console.log(data);
  return (
    <div>
    </div>
  );
}

export default App;
