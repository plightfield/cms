import React from "react";
import Navigation from "src/components/Navigation";

function Home() {
  return (
    <div>
      <Navigation active={"/home"} />
      this is home
    </div>
  );
}

export default Home;
