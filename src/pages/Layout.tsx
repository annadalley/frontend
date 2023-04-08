import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

// this puts the links on top

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
