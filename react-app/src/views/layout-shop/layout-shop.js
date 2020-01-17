import React from 'react';
import {
    Switch, Route
} from "react-router-dom";
import Home from "./home/home";
import Sneaker from "./sneaker/sneaker";
import Nav from '../../components/nav/Nav';
export default function LayoutShop() {
    return (
        <>
            <Nav></Nav>
            <Switch>
                <Route path="/sneakers/:alias">
                    <Sneaker />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </>
    );
}