import { Home } from "./pages";
import DocumentView from "./components/DocumentView";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/docview">
              <DocumentView />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
