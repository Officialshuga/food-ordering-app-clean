import ReactDOM from "react-dom/client";
import AppLayout from "./src/components/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import Body from "./src/components/Body";
import { RouterProvider } from "react-router-dom";
import Error from "./src/components/Error/Error.jsx";
import { RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./src/components/Spinner/Spinner.js";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";




//LAZY LOAD COMPONENTS
const About = lazy(() => import("./src/components/About/About"));
const Contact = lazy(() => import("./src/components/Contact/Contact"));
const RestaurantMenu = lazy(() => import("./src/components/Restaurants/RestaurantMenu/RestaurantMenu")); 
const Cart = lazy(()=> import("./src/components/Cart/Cart"));
const Login = lazy(()=> import("./src/components/Login/Login"));


//routes

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Spinner />}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Spinner />}>
            {" "}
            <Contact />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <RestaurantMenu />
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Spinner />}>
            <Cart/>
          </Suspense>
        )
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Spinner />}>
            <Login/>
          </Suspense>
        )
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <PersistGate loading={<Spinner/>} persistor={persistor}>
        <RouterProvider router={appRouter} />
      </PersistGate>
  </Provider>
  );
//json-server --watch src/data/db.json --port 3001
