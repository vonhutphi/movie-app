import Booking from '../pages/Booking'
import DetailPage from '../pages/DetailPage'
import HomeLogIn from '../pages/HomeLogIn'
import HomePage from '../pages/HomePage'
import HomeSignUp from '../pages/HomeSignUp'


export const routeHome=[
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/phim/:maPhim',
        exact: false,
        component: DetailPage
    },
    {
        path: '/dang-nhap',
        exact: false,
        component: HomeLogIn
    },
    {
        path: '/dang-ky',
        exact: false,
        component: HomeSignUp
    },
    {
        path: '/dat-ve/:maLichChieu',
        exact: false,
        component: Booking
    },
   
]