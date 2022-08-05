import {Routes, Route} from 'react-router-dom'
import './App.css';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Countries from './pages/Countries/Countries';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
     </Routes>
    </div>
  );
}

export default App;
