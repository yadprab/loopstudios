import './styles/styles.css';
import {Container} from './Components/Container';
import {About} from './Components/About'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Container} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
