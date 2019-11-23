import React, { Suspense } from 'react';
import Loader from './components/Loader';

// resource to fetching data
import fetchData from './fetcher';
const resource = fetchData();

// async components
const ProfileDetails = React.lazy(() => import('./components/ProfileDetails'));
const Posts = React.lazy(() => import('./components/Posts'));

const App = () => (
  <div className="container my-5">
    <Suspense fallback={<Loader />}>
      <ProfileDetails resource={resource} />
    </Suspense>
    <Suspense fallback={<Loader />}>
      <Posts resource={resource} />
    </Suspense>
  </div>
);

export default App;
