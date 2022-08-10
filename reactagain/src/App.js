import './App.css';
import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

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
          </Switch>
          <Switch>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/blogs/:id">
              <BlogDetails/>
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
