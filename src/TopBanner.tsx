import React from 'react';
import styles from './TopBanner.module.css';

//This is the text and picture for the home page

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          {<img width={500} src="/JoelHiltonHeadshot.jpg" alt="companyLogo" />}
        </div>

        <div className="col-8 align-self-center ">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
      <div className="text-center">
        <br></br>
        <h2>This is a collection of all of Joel Hilton's movies!</h2>
        <h2>Click the Podcasts link to see Baconsale.com</h2>
        <h2>Click the collections tab to see a list of all his movies!</h2>
      </div>
    </>
  );
}

export default TopBanner;
