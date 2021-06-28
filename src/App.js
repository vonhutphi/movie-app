import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "antd/dist/antd.css";
import "./App.scss";
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routeHome } from "./route";
import ScrollToTop from "./components/ScrollToTop";
import Loading from './components/Loading'
const showLayoutHome = (route) => {
  if (route && route.length > 0) {
    return route.map((item, index) => {
      return (
        <Route
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      );
    });
  }
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>TIX - Đặt Vé Nhanh Nhất / Trang chủ</title>
          <link
            rel="shortcut icon"
            type="image/gif"
            href="https://s3img.vcdn.vn/123phim/2018/09/459970ce80ca2c762c8c8076b415c06e.png"
          />
        </Helmet>
        <ScrollToTop />
        <Suspense fallback={<Loading/>}>
          <Switch>{showLayoutHome(routeHome)}</Switch>
        </Suspense>
        {/* <Loading/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
