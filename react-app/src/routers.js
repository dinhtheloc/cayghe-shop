import Dashboard from "./views/dashboard/dashboard";
import Register from "./views/register/register";
import Login from "./views/login/login";
import LayoutShop from "./views/layout-shop/layout-shop";
import Home from "./views/layout-shop/home/home";
import Sneaker from "./views/layout-shop/sneaker/sneaker";


export const routes = [
    {
        path: "/register",
        component: Register
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/admin/dashboard",
        component: Dashboard
    },
    {
        path: "/",
        component: LayoutShop
    }

];