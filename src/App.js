import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import GroupCategory from './components/Category';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Nav />
          <Header />
          <Main />
          <GroupCategory />
        </Provider>
    </div>
  );
}

export default App;
