import "./styles/styles.css";
import { Container } from "./Components/Container";
import { About } from "./Components/About";
import { Events } from "./Components/Events";
import { Supports } from "./Components/Supports";
import {Products} from './Components/Products'
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <section className='main--container'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Container} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/supports" component={Supports} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
