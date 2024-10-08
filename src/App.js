import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css';
import Home from './components/Home';
import Entry from './components/Entry';
import Thread from './models/Thread';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/category/:id" element={<Category />} /> */}
            <Route path="/categories/:categoryId" element={<Entry />} />
            {/* <Route path="/categorythreads/:categoryId" element={<Home />} /> */}
            <Route path="/thread/:id" element={<Thread />} />
          </Routes>
      </Provider>
    </div>
  );
}

export default App;
