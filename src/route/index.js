// import React from "react";
import Booking from '../pages/Booking'
import DetailPage from '../pages/DetailPage'
import HomeLogIn from '../pages/HomeLogIn'
import HomePage from '../pages/HomePage'
import HomeSignUp from '../pages/HomeSignUp'
// const Booking = React.lazy(() => import("../pages/Booking"));
// const HomePage = React.lazy(() => import("../pages/HomePage"));
// const DetailPage = React.lazy(() => import("../pages/DetailPage"));
// const HomeLogIn = React.lazy(() => import("../pages/HomeLogIn"));
// const HomeSignUp = React.lazy(() => import("../pages/HomeSignUp"));
export const routeHome = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/phim/:maPhim",
    exact: false,
    component: DetailPage,
  },
  {
    path: "/dang-nhap",
    exact: false,
    component: HomeLogIn,
  },
  {
    path: "/dang-ky",
    exact: false,
    component: HomeSignUp,
  },
  {
    path: "/dat-ve/:maLichChieu",
    exact: false,
    component: Booking,
  },
];
