import { Outlet } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import { Suspense } from "react";
import Spinner from "./Spinner/Spinner";

const AppLayout = () =>{
    return(
      <div className="App">
          <Header />
          <Suspense fallback={<Spinner/>}>
            <Outlet />
          </Suspense>
          {/* <Outlet /> */}
          {/* <Body /> */}
      </div>
    )
};
export default AppLayout;