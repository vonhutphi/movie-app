import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "antd/dist/antd.css";
import "./App.scss";
import NavbarHome from "./components/NavBarHome";
import HomePage from "./pages/HomePage";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TIX - Đặt Vé Nhanh Nhất / Trang chủ</title>
        <link
          rel="shortcut icon"
          type="image/gif"
          href="https://s3img.vcdn.vn/123phim/2018/09/459970ce80ca2c762c8c8076b415c06e.png"
        />
      </Helmet>
      <HomePage />
    </>
  );
}

export default App;
