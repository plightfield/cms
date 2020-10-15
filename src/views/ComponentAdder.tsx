import React from "react";
import Navigation from "src/components/Navigation";

function ComponentAdder() {
  return (
    <div>
      <Navigation active={"/component-adder"} />
      this is component adder
    </div>
  );
}

export default ComponentAdder;
