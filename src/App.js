import logo from './logo.svg';
import './App.css';
import Master from './Layouts/Master';
import Home from './Pages/Home';
import ListingList from './Pages/ListingList';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Error404 from './Pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/listing-list" element={<ListingList />}></Route>
          <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
