import React from "react";
import logo from "./logo192.png";
import styles from "./App.module.css";
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import Taailwind from "./Taailwind";
import "./tailwind.css";
// import { useEffect } from "react";

import "./style.scss";

const lesson1_2 = () => {
  // useEffect(() => {
  //   if (process.env.NODE_ENV === "production") {
  //     //do analtyics
  //   } else {
  //     console.log("Development");
  //   }
  // }, []);
  return (
    <>
      <Title>Hello Styled Components</Title>
      <Title theme="dark">Hello Styled Components</Title>
      <Bootstrap></Bootstrap>

      <div className={styles.App}>
        <h3>{process.env.NODE_ENV}</h3>

        <img src="/logo192.png" alt="" />
        <img src={logo} alt="" />
      </div>

      <hr></hr>

      <Taailwind></Taailwind>
      <p className="env">Test</p>
    </>
  );
};

export default lesson1_2;
