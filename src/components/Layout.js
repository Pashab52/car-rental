import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Suspense } from "react";
import { Loader } from "./Loader/Loader";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <Loader />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
};

export default Layout;
