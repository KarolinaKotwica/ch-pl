import { Provider } from 'react-redux';
import store from './store/store';
import Nav from './components/Nav';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Nav />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/category/:id" element={<Category />} /> */}
            </Routes>
          </Provider>
    </div>
  );
}

export default App;
