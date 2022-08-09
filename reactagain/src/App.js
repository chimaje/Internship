import './App.css';
import Navbar from './navbar';
import Home from './Home';

function App() {
  // const title='welcome to the new blog';
  // const likes=50;
  // const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
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
  );
}

export default App;
