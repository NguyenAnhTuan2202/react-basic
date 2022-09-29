import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./examples/myComponent";
import ListTodo from "./Todos/listTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navgigation from "./Nav/Nav";
import Home from "./examples/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListUser from "./Users/listUser";
import DetailUser from "./Users/detailUser";
/*
 * 2 components: class component / function component (function, arrow)
 */
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navgigation />

            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/todos">
                <ListTodo />
              </Route>
              <Route path="/about">
                <MyComponent />
              </Route>
              <Route path="/user" exact>
                <ListUser />
              </Route>
              <Route path="/user/:id">
                <DetailUser />
              </Route>
            </Switch>
          </header>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </Router>
    </>
  );
}

export default App;
