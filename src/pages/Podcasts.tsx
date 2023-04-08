import React from 'react';
import Layout from './Layout';

// Podcasts Link Page

function Podcast(props: any) {
  return (
    <>
      <div className="text-center">
        <Layout />
        <h1>Wanna Hear Joel's Podcasts?</h1>
        <br></br>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <a
              href="https://baconsale.com"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Click Here!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Podcast;
