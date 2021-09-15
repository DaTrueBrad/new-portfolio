import './App.css';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path='/home'>
            <h1>Home Page</h1>
          </Route>
          <Route path='/about'>
            <h1>About Page</h1>
          </Route>
          <Route path='/contact'>
            <h1>Contact Page</h1>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
