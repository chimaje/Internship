import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/404Error';
function App() {
  // const title='welcome to the new blog';
  // const likes=50;
  // const link = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/create">
              <Create/>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>

            <Route path="*">
                <NotFound/>
              </Route>
          </Switch>
          {/* <h1>App component</h1>
          <h1> {title}</h1>
          <p>Liked {likes} times</p>

          <p>{10}</p>
          <p>{"heellllooo"}</p>
          <p>{[1,23,45,67]}</p>
          <p>{Math.random()*10}</p>
          <a href={link}>Google Site</a> */}

        </div>
      </div>
    </Router>
  );
}

export default App;
