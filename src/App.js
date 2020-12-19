import './App.scss';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Articles from './Pages/Articles/Articles';
import logo from './Assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
      </header>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Articles/>
        </Route>
        <Route path="/diet-plan">
          <p>hdsa</p>
        </Route>
        <Route path="/exercise">
          <h1>Simmy</h1>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
