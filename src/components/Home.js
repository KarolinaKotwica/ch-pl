import React from 'react';
import Main from './Main';
import GroupCategory from './Category';
import Nav from './Nav';
import Header from './Header';
import RightMenu from './areas/rightmenu/RightMenu';

const Home = () => {
  return (
    <div className="screen-root-container home-container">
        <Nav />
        <Header />
        <GroupCategory />
        <section className='container_with_right_menu'>
            <Main />
            <RightMenu />
        </section>
    </div>
  );
};

export default Home;
