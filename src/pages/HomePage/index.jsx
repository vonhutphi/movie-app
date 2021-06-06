import React from "react";
import { connect } from "react-redux";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import HomeApp from "../../components/HomeApp";
import HomeTool from "../../components/HomeTool";
import ListMovie from "../../components/ListMovie";
import NavbarHome from "../../components/NavBarHome";
import News from "../../components/News";
import ShowTime from "../../components/ShowTime";
// import Loading from "../../components/Loading";
function HomePage(props) {
  //   const loading = useSelector((state) => state.listMovieReducer.loading);
  return (
    <>
      <NavbarHome />
      <Carousel />
      <HomeTool />
      <ListMovie />
      <ShowTime />
      <News />
      <HomeApp />
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
  };
};
export default connect(mapStateToProps, null)(HomePage);
