import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/category/:id" element={<Category />} /> */}
            </Routes>
          </Provider>
    </div>
  );
}

export default App;
