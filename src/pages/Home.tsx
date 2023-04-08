import React from 'react';
import Layout from './Layout';
import TopBanner from '../TopBanner';

// function to create the Home page

function Home(props: any) {
  return (
    <>
      <div>
        <Layout />
        <TopBanner saying="Joel Hilton's Movie Collection" />
      </div>
    </>
  );
}

export default Home;
