import React from 'react';
import Main from './Main';
import GroupCategory from './Category';
import Nav from './Nav';
import Header from './Header';

const Home = () => {
  return (
    <div className="screen-root-container home-container">
        <Nav />
        <Header />
        <GroupCategory />
        <Main />
    </div>
  );
};

export default Home;
