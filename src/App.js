import "./App.css";
import {BrowserRouter as Router, Routes, Route} 
from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
    <Router>
       <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/movies/:type" element={<MovieList/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;

// Home page
// Movies List
// Movie Details
// 