import React from "react";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";

const Home = () => {
  return (
    <div>
      <>
        <div className="AppTheme">
          <HeaderContext />
          <FooterContext />
        </div>
      </>
    </div>
  );
};

export default Home;
