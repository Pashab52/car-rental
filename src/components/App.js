import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout";
const Home = lazy(() => import("./pages/Home"));
const Cars = lazy(() => import("./pages/Cars"));
const FavoriteCars = lazy(() => import("./pages/FavoriteCars"));


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Cars />} />
          <Route
            path="/favorites"
            element={<FavoriteCars />}
          />
          <Route
            path="*"
            element={
              <div className="alert-wrap">
                <h2 className="alert-txt">
                  404 - Page not found!
                </h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
