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
        <Main />
        <section className='container_with_right_menu'>
            <RightMenu />
        </section>
    </div>
  );
};

export default Home;
