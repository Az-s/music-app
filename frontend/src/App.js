import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/UI/NavBar/NavBar';
import Authors from './containers/authors/Authors';
import AlbumList from './containers/albumList/AlbumList';
import AlbumInfo from './containers/albumInfo/AlbumInfo';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Authors} />
        <Route path="/albums" component={AlbumList} />
        <Route path="/album/:id" component={AlbumInfo} />
      </Router>
    </div>
  );
}

export default App;
