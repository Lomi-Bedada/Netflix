// import "../index.css";

import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import React from "react";
import RowList from "../Row/RowList/RowList";

// import Loader from "../Components/Loader/Loader";

const Home = () => {
  return (
    <>
      {/* <Loader /> */}
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
