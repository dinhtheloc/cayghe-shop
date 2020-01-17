
import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";

import RouteWithSubRoutes from './components/routeWithSubRoutes';

import { routes } from './routers';


export default function App() {
  return (
    <Router>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Router>
  );
}


