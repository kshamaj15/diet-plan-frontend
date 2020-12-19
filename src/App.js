import './App.scss';
import { Switch, Route  } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Articles from './Pages/Articles/Articles';
import Header from './Components/Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
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
