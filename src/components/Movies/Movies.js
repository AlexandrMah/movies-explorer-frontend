import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {

  return (
    <div className="main">
      <Header />
      <SearchForm />
      <Footer />
    </div>
  )
}

export default Movies;