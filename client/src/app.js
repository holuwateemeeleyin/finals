import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Routes from "./routes";
import routes from "./routes";
import withTracker from "./withTracker";


export default () => (

  <Router>
    <div> 
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
  // <Router>
  //   <div>
  //     <Routes/>
  //   </div>
  // </Router>
);
