import React from "react";
import { useGlobalContext } from "./context";

function Home() {
  const data = useGlobalContext();
  console.log(data);
  return (
    <>
      <div>Home</div>
    </>
  );
}

export default Home;
