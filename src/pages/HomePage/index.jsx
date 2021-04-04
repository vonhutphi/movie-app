import React from 'react'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import HomeApp from '../../components/HomeApp'
import HomeTool from '../../components/HomeTool'
import ListMovie from '../../components/ListMovie'
import NavbarHome from '../../components/NavBarHome'
import News from '../../components/News'
import ShowTime from '../../components/ShowTime'

export default function HomePage() {
    return (
        <>
            <NavbarHome/>
            <Carousel/>
            <HomeTool/>
            <ListMovie/>
            <ShowTime/>
            <News/>
            <HomeApp/>
            <Footer/>
        </>
    )
}
