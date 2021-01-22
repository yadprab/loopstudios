import "./styles/styles.css";
import { Container } from "./Components/Container";
import { About } from "./Components/About";
import { Events } from "./Components/Events";
import { Supports } from "./Components/Supports";
import {AnimatePresence} from 'framer-motion'
import {  Route, Switch, useLocation} from "react-router-dom";
function App() {
  let location = useLocation();
  return (
    <>
      <section className="main--container">
       
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Container} />
              <Route exact path="/about" component={About} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/supports" component={Supports} />
            </Switch>
          </AnimatePresence>
       
      </section>
    </>
  );
}

export default App;
