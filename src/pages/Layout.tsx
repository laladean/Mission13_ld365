import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

// for navigating between several pages

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
