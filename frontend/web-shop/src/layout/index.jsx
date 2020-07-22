import React from "react";
import {
    BrowserRouter as Router,

    Route, Switch
} from "react-router-dom";
import Home from '../views/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';



function Layout(props) {
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer></Footer>
        </Router>
    );
}

export default Layout;