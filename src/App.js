
import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/profileClass';
import UserContext from './utils/userContext';


const InstaMart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/About'));


const AppLayout = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@gmail.com'
    })
    return (
        <div className='app'>
            <UserContext.Provider value={{ user: user, setUser : setUser }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
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
                element: (<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>),
                children: [{
                    path: "profile",
                    element: <Profile />
                }]
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/instamart",
                element: (<Suspense fallback={<h1>Loading...</h1>}><InstaMart /></Suspense>)
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