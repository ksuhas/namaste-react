
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/profileClass';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/about",
                element: <About />,
                children:[{
                    path: "profile",
                    element: <Profile/>
                }]
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);