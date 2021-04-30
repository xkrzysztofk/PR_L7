import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Posts from "./utils/components/posts";
import Home from "./utils/components/home";
import NavBar from "./utils/components/navbar";
import NotFound from "./utils/components/notFound";
function App() {
  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
          <div className="content">
            <Switch>
              <Route path="/posts"
                     render={props => <Posts sortBy="newest" {...props} />}
              />
              <Route path="/" exact component={Home} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
  );
}
export default App;