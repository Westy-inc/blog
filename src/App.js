import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route , Routes  } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDeets';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
